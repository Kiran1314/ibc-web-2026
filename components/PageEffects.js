'use client';

import { useEffect } from 'react';
import { initReveal } from '@/lib/reveal';

// Mounted once per page: starts the scroll-reveal observers for that page's content.
export default function PageEffects() {
  useEffect(() => initReveal(), []);
  return null;
}
