'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle({ className = '' }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('vivamais-theme') || 'light';
    setIsDark(saved === 'dark');
  }, []);

  const toggle = () => {
    const next = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('vivamais-theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  return (
    <button
      onClick={toggle}
      className={`themeToggle ${className}`.trim()}
      aria-label="Alternar tema"
      title={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      {isDark ? '☀' : '☾'}
    </button>
  );
}
