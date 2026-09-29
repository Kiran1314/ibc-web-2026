'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/clients', label: 'Our Clients' },
  { href: '/services', label: 'Our Services' },
  { href: '/work', label: 'Work Samples' },
  { href: '/ibc-intelligence', label: 'IBC Intelligence' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/contact', label: 'Contact Us', cta: true },
];

function isActive(pathname, href) {
  if (href === '/blogs') return pathname === '/blogs' || pathname.startsWith('/blog-post');
  return pathname === href;
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [light, setLight] = useState(false);

  // Theme: restore the saved choice, mirror it on <html> and <body> (the CSS keys off both).
  const applyTheme = (isLight) => {
    document.documentElement.classList.toggle('theme-light', isLight);
    document.body.classList.toggle('theme-light', isLight);
    setLight(isLight);
    try {
      localStorage.setItem('ibc-theme', isLight ? 'light' : 'dark');
    } catch (e) {}
  };
  useEffect(() => {
    let stored = null;
    try {
      stored = localStorage.getItem('ibc-theme');
    } catch (e) {}
    applyTheme(stored === 'light');
  }, []);

  // Mobile menu state lives on <body> (`menu-open`) because the CSS styles the nav from there.
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
  }, [menuOpen]);
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Header is transparent over the home hero until the page is scrolled a little.
  useEffect(() => {
    const update = () => {
      document.body.classList.toggle('home-hero-top', pathname === '/' && window.scrollY <= 50);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      document.body.classList.remove('home-hero-top');
    };
  }, [pathname]);

  return (
    <header id="hdr">
         
      <Link className="header-brand" href="/" aria-label="IBC Studio home">
     
       <>
         <Image
            className="brand-logo-dark"
            src="/assets/images/logo/ibc-logo.svg"
            alt="IBC Studio Logo"
            width={2000}
            height={1033}
            priority={true}
            unoptimized
          />
         <Image
            className="brand-logo-light"
            src="/assets/images/logo/ibc-logo-light.svg"
            alt="IBC Studio Logo"
            width={2000}
            height={1033}
            priority={true}
            unoptimized
          />
       </>
       
      </Link>
      
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Open navigation menu"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        <span></span>
      </button>
      <nav id="primary-navigation" aria-label="Primary navigation">
        {NAV.map(({ href, label, cta }) => {
          const active = isActive(pathname, href);
          const className = cta ? `nav-cta${active ? ' active' : ''}` : active ? 'active' : undefined;
          return (
            <Link key={href} href={href} className={className} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          );
        })}
      </nav>
      <button
        className="theme-toggle"
        type="button"
        onClick={() => applyTheme(!light)}
        aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
        aria-pressed={light}
      >
        <span className="theme-toggle__sun" aria-hidden="true">
          ☀
        </span>
        <span className="theme-toggle__moon" aria-hidden="true">
          ☾
        </span>
      </button>
      <div className="nav-overlay" onClick={() => setMenuOpen(false)} aria-hidden="true"></div>
    </header>
  );
}
