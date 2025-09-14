'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import Link from 'next/link';

export const CookieSmileBanner = () => {
const [isVisible, setIsVisible] = useState(false);
useEffect(() => {
const consent = localStorage.getItem('cookie_consent_v5');
if (!consent) {
const timer = setTimeout(() => setIsVisible(true), 2000);
return () => clearTimeout(timer);
}
}, []);
const handleConsent = () => {
localStorage.setItem('cookie_consent_v5', 'true');
setIsVisible(false);
};
if (!isVisible) return null;
return (
<AnimatePresence>
<motion.div className="cookie-banner" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
<div className="cookie-banner__content">
  <div className="cookie-banner__icon">🍪</div>
  <p>Мы используем cookie для улучшения работы сайта. <Link href="/privacy-policy">Подробнее</Link></p>
</div>
<div className="cookie-banner__actions">
  <button className="cookie-banner__btn-primary" onClick={handleConsent}>ОК</button>
</div>
</motion.div>
</AnimatePresence>
);
};
