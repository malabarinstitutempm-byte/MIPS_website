/* ----------------------------------------------------
   MALABAR INSTITUTE OF PARAMEDICAL SCIENCE - APP.JS
   ---------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Mobile Navigation Menu Toggle ---
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navigationMenu = document.getElementById('navigation-menu');
    const menuIcon = mobileMenuToggle.querySelector('i');

    mobileMenuToggle.addEventListener('click', () => {
        navigationMenu.classList.toggle('active');
        
        // Toggle hamburger / close icon
        if (navigationMenu.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        } else {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    });

    // Close menu when a navigation link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navigationMenu.classList.remove('active');
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        });
    });


    // --- 2. Sticky Header scroll effect & Active section highlight ---
    const header = document.querySelector('.main-header');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        // Sticky Header shrink
        if (window.scrollY > 50) {
            header.style.padding = '5px 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.96)';
        } else {
            header.style.padding = '0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
        }

        // Highlight Active Menu Item on Scroll
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // offset for sticky header
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });


    // --- 3. Interactive Course Catalog Filters ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            courseCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                // Add fade-out transition effect
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';

                setTimeout(() => {
                    if (filterValue === 'all' || filterValue === cardCategory) {
                        card.classList.remove('hide');
                        // Fade in back
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.classList.add('hide');
                    }
                }, 200); // match CSS transition duration
            });
        });
    });


    // --- 4. Interactive Enquiry Form Validation & Mock Submission ---
    const enquiryForm = document.getElementById('enquiry-form');
    const submitBtn = document.getElementById('form-submit-btn');
    const submitBtnText = submitBtn.querySelector('span');
    const submitBtnIcon = submitBtn.querySelector('i');
    const statusMessage = document.getElementById('form-status-message');

    enquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('student-name').value.trim();
        const phoneInput = document.getElementById('student-phone').value.trim();
        const emailInput = document.getElementById('student-email').value.trim();
        const courseInput = document.getElementById('student-course').value;
        const messageInput = document.getElementById('student-message').value.trim();

        // Simple validation
        if (nameInput.length < 3) {
            showStatus('Please enter a valid name (at least 3 characters).', 'error');
            return;
        }

        // 10 digit Indian mobile number check
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(phoneInput)) {
            showStatus('Please enter a valid 10-digit mobile number starting with 6-9.', 'error');
            return;
        }

        if (!courseInput) {
            showStatus('Please select a course to proceed.', 'error');
            return;
        }

        // Submitting to FormSubmit via AJAX
        setLoadingState(true);

        fetch("https://formsubmit.co/ajax/malabarinstitutempm@gmail.com", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                Name: nameInput,
                Phone: phoneInput,
                Email: emailInput || "N/A",
                "Requested Course": courseInput,
                Message: messageInput || "No message provided."
            })
        })
        .then(response => response.json())
        .then(data => {
            setLoadingState(false);
            if (data.success === "true" || data.success === true) {
                showStatus(`Thank you, ${nameInput}! Your admission enquiry for "${courseInput}" has been submitted. An email has been sent to the administration. We will contact you shortly.`, 'success');
                enquiryForm.reset();
            } else {
                showStatus("Something went wrong. Please try again or contact us directly by phone.", "error");
            }
        })
        .catch(error => {
            setLoadingState(false);
            showStatus("Connection error. Please check your internet and try again.", "error");
        });
    });

    function showStatus(message, type) {
        statusMessage.textContent = message;
        statusMessage.className = `form-status ${type}`;
        
        // Scroll slightly to status message on mobile
        statusMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function setLoadingState(isLoading) {
        if (isLoading) {
            submitBtn.disabled = true;
            submitBtnText.textContent = 'Submitting enquiry...'
            submitBtnIcon.className = 'fa-solid fa-spinner fa-spin';
            submitBtn.style.opacity = '0.7';
            statusMessage.style.display = 'none';
        } else {
            submitBtn.disabled = false;
            submitBtnText.textContent = 'Submit Enquiry';
            submitBtnIcon.className = 'fa-solid fa-paper-plane';
            submitBtn.style.opacity = '1';
        }
    }
});

// --- 5. Global Course Pre-selection & Scroll Action ---
// This function is exposed globally so that it can be triggered by inline onclick handlers in course cards.
window.selectCourse = (courseValue) => {
    const courseSelect = document.getElementById('student-course');
    if (courseSelect) {
        courseSelect.value = courseValue;
        
        // Find corresponding optgroup and option to ensure it's selected properly
        for (let i = 0; i < courseSelect.options.length; i++) {
            if (courseSelect.options[i].value === courseValue) {
                courseSelect.selectedIndex = i;
                break;
            }
        }
    }
    
    // Smooth scroll to the contact form section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
};
