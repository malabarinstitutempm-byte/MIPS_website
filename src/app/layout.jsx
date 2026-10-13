import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/common/WhatsAppButton';

export const metadata = {
    title: 'Mips Project',
    description: 'Mips project converted to Next.js',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="App">
                    <Header />
                    <WhatsAppButton />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
