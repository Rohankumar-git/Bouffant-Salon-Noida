import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleVisible, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="hidden md:flex fixed bottom-6 right-6 z-30 w-11 h-11 rounded-full bg-[#064E3B] hover:bg-[#022C22] text-[#D9DEE2] hover:text-white items-center justify-center shadow-lg border border-[#D9DEE2]/20 transition-all duration-300 hover:scale-110 cursor-pointer"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
