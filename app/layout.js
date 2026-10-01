import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import CookieConsent from '@/components/CookieConsent';

const FONTS =
  'https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;600;700;800;900&family=Work+Sans:wght@400;500;600&display=swap';

// Restore the saved theme before the first paint.
const HEAD_SCRIPT = `try{if(localStorage.getItem('ibc-theme')==='light')document.documentElement.classList.add('theme-light')}catch(e){}`;

const BODY_SCRIPT = `try{if(localStorage.getItem('ibc-theme')==='light')document.body.classList.add('theme-light')}catch(e){}`;

export const metadata = {
  title: 'IBC Studio',
  description: 'IBC Studio is a Dubai media production house.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href={FONTS} rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: HEAD_SCRIPT }} />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: BODY_SCRIPT }} />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <CookieConsent />
        <Header />
        {children}
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
