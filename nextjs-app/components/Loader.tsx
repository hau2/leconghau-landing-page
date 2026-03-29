'use client';

import { useEffect, useState } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-screen${hidden ? ' hide' : ''}`}>
      <div className="loader-logo">
        <span className="bracket">&lt;</span>Hậu.Dev<span className="bracket">/&gt;</span>
      </div>
      <div className="loader-bar-track">
        <div className="loader-bar" />
      </div>
      <div className="loader-text">
        <span>$</span> initializing...
      </div>
    </div>
  );
}
