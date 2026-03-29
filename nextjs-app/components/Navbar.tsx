'use client';

import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      {/* MOBILE OVERLAY MENU */}
      <div className={`mobile-overlay${mobileOpen ? ' open' : ''}`}>
        <button className="mobile-close" onClick={closeMenu}>
          <span className="material-icons-round">close</span>
        </button>
        <a href="#industries" onClick={closeMenu}>Lĩnh Vực</a>
        <a href="#templates" onClick={closeMenu}>Mẫu Web</a>
        <a href="#cases" onClick={closeMenu}>Hiệu Quả</a>
        <a href="#pricing" onClick={closeMenu}>Bảng Giá</a>
        <a href="#about" onClick={closeMenu}>Về Tôi</a>
        <a href="#faq" onClick={closeMenu}>FAQ</a>
        <a href="#contact" className="mob-cta" onClick={closeMenu}>Tư Vấn Ngay</a>
      </div>

      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <a href="#" className="logo">
            <span className="bracket">&lt;</span>Hậu<span className="dot">.</span>Dev<span className="bracket">/&gt;</span>
          </a>
          <ul className="nav-links">
            <li><a href="#industries">Lĩnh Vực</a></li>
            <li><a href="#templates">Mẫu Web</a></li>
            <li><a href="#cases">Hiệu Quả</a></li>
            <li><a href="#pricing">Bảng Giá</a></li>
            <li><a href="#about">Về Tôi</a></li>
            <li><a href="#contact" className="nav-cta">Tư Vấn Ngay</a></li>
          </ul>
          <button className="menu-btn" onClick={() => setMobileOpen(true)}>
            <span className="material-icons-round">menu</span>
          </button>
        </div>
      </nav>
    </>
  );
}
