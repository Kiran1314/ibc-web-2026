'use client';

import { useEffect, useState } from 'react';

const GA_ID = 'G-YG80W97DF7';
const STORAGE_KEY = 'ibc-cookie-consent';

function loadGoogleAnalytics() {
  if (typeof window === 'undefined') return;

  const existingScript = document.querySelector('script[src*="googletagmanager.com/gtag/js"]');
  if (existingScript) return;

  const dataLayer = window.dataLayer || [];
  window.dataLayer = dataLayer;
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted',
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.gtag('js', new Date());
}

function applyGoogleConsent(granted) {
  if (typeof window === 'undefined') return;

  const dataLayer = window.dataLayer || [];
  window.dataLayer = dataLayer;
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  const consent = granted
    ? {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        functionality_storage: 'granted',
        personalization_storage: 'granted',
        security_storage: 'granted',
      }
    : {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        functionality_storage: 'granted',
        personalization_storage: 'denied',
        security_storage: 'granted',
      };

  window.gtag('consent', 'update', consent);

  if (granted) {
    if (!document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
      loadGoogleAnalytics();
    }

    window.gtag('config', GA_ID, {
      anonymize_ip: true,
      page_path: window.location.pathname + window.location.search,
    });
    window.gtag('event', 'page_view');
  }
}

export default function CookieConsent() {
  const [consentState, setConsentState] = useState(null);

  useEffect(() => {
    const storedChoice = localStorage.getItem(STORAGE_KEY);

    if (storedChoice === 'granted') {
      setConsentState('granted');
      loadGoogleAnalytics();
      applyGoogleConsent(true);
      return;
    }

    if (storedChoice === 'denied') {
      setConsentState('denied');
      applyGoogleConsent(false);
      return;
    }

    setConsentState(null);
  }, []);

  const saveConsent = (choice) => {
    const granted = choice === 'granted';
    localStorage.setItem(STORAGE_KEY, granted ? 'granted' : 'denied');
    setConsentState(granted ? 'granted' : 'denied');
    applyGoogleConsent(granted);
  };

  if (consentState !== null) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: '20px',
        right: '20px',
        bottom: '20px',
        zIndex: 1200,
        background: 'rgba(14, 16, 20, 0.96)',
        border: '1px solid rgba(147,196,179,0.32)',
        borderRadius: '16px',
        boxShadow: '0 24px 70px rgba(0,0,0,0.38)',
        padding: '22px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        color: '#fff',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div style={{ maxWidth: '720px' }}>
        <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>
          We use cookies for analytics and site performance
        </div>
        <div style={{ color: 'rgba(255,255,255,0.72)', fontSize: '14px', lineHeight: 1.6 }}>
          We only activate analytics after you consent. This helps us understand traffic and improve the website while respecting UAE privacy expectations.
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
        <button
          type="button"
          onClick={() => saveConsent('denied')}
          style={{
            background: 'transparent',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '8px',
            padding: '10px 16px',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          Essential only
        </button>
        <button
          type="button"
          onClick={() => saveConsent('granted')}
          style={{
            background: 'linear-gradient(135deg, #2426a8, #3033c6)',
            color: '#fff',
            border: '1px solid rgba(147,196,179,0.28)',
            borderRadius: '8px',
            padding: '10px 18px',
            cursor: 'pointer',
            fontWeight: 700,
          }}
        >
          Accept analytics
        </button>
      </div>
    </div>
  );
}
