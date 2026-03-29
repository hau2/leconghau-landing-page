'use client';

import { useEffect, useRef, useCallback, useState, type ReactNode } from 'react';

/* ===== TiltCard ===== */
export function TiltCard({ className = '', children, style }: { className?: string; children: ReactNode; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const cx = r.width / 2, cy = r.height / 2;
    const rx = ((y - cy) / cy) * -10;
    const ry = ((x - cx) / cx) * 10;
    card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.03,1.03,1.03)`;
    card.style.setProperty('--lx', x + 'px');
    card.style.setProperty('--ly', y + 'px');
  }, []);

  const onMouseLeave = useCallback(() => {
    const card = ref.current;
    if (!card) return;
    card.style.transition = 'transform 0.6s cubic-bezier(0.34,1.56,0.64,1)';
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)';
    setTimeout(() => { if (card) card.style.transition = ''; }, 600);
  }, []);

  const onMouseEnter = useCallback(() => {
    const card = ref.current;
    if (card) card.style.transition = 'none';
  }, []);

  return (
    <div
      ref={ref}
      className={`g-card ${className}`}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      <div className="card-light" />
      {children}
    </div>
  );
}

/* ===== Counter ===== */
export function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted.current) {
            counted.current = true;
            const duration = 1800;
            const start = performance.now();
            function update(now: number) {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 4);
              if (el) el.textContent = String(Math.round(target * eased));
              if (progress < 1) requestAnimationFrame(update);
            }
            requestAnimationFrame(update);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <>
      <span ref={ref}>0</span>{suffix}
    </>
  );
}

/* ===== Reveal ===== */
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = '0';
    el.style.transform = 'translateY(40px) rotateX(4deg)';
    el.style.transition = 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)';
    el.style.transformOrigin = 'center bottom';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const parent = entry.target.parentElement;
            if (!parent) return;
            const siblings = parent.querySelectorAll('.reveal');
            const idx = Array.from(siblings).indexOf(entry.target as Element);
            setTimeout(() => {
              (entry.target as HTMLElement).style.opacity = '1';
              (entry.target as HTMLElement).style.transform = 'translateY(0) rotateX(0)';
            }, idx * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

/* ===== FaqItem ===== */
export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [active, setActive] = useState(false);

  return (
    <Reveal>
      <div className={`faq-item${active ? ' active' : ''}`} onClick={() => setActive(!active)}>
        <button className="faq-q">
          <span className="faq-icon">+</span>
          <span className="faq-q-text">{question}</span>
        </button>
        <div className="faq-a">
          <div className="faq-a-inner" dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      </div>
    </Reveal>
  );
}

/* ===== FloatingContacts ===== */
export function FloatingContacts() {
  return (
    <div className="float-contacts">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="float-btn fb-btn" aria-label="Facebook">
        <span className="float-tip">Nhắn tin Facebook</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>
      <a href="https://zalo.me/0358500195" target="_blank" rel="noopener noreferrer" className="float-btn zalo-btn" aria-label="Zalo">
        <span className="float-tip">Chat Zalo</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.037 0 11.25c0 3.525 1.7 6.675 4.35 8.775V24l3.6-2.025c1.275.375 2.625.525 4.05.525 6.627 0 12-5.037 12-11.25S18.627 0 12 0zm1.2 15.15H9.6L13.8 9.6h-2.4L7.2 15.15V8.85h3.6l-4.2 5.55h2.4l4.2-5.55v6.3z" />
        </svg>
      </a>
      <a href="tel:0358500195" className="float-btn phone-btn" aria-label="Gọi điện">
        <span className="float-tip">Gọi 0358.500.195</span>
        <span className="material-icons-round" style={{ fontSize: '1.3rem' }}>call</span>
      </a>
    </div>
  );
}

/* ===== HeroTerminalTilt ===== */
export function HeroTerminalTilt({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const ht = ref.current;
    if (!ht) return;
    const r = ht.getBoundingClientRect();
    const rx = ((e.clientY - r.top - r.height / 2) / (r.height / 2)) * -8;
    const ry = ((e.clientX - r.left - r.width / 2) / (r.width / 2)) * 8;
    ht.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  }, []);

  const onMouseLeave = useCallback(() => {
    const ht = ref.current;
    if (!ht) return;
    ht.style.transition = 'transform 0.7s cubic-bezier(0.34,1.56,0.64,1)';
    ht.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    setTimeout(() => { if (ht) ht.style.transition = ''; }, 700);
  }, []);

  const onMouseEnter = useCallback(() => {
    const ht = ref.current;
    if (ht) ht.style.transition = 'none';
  }, []);

  return (
    <div
      ref={ref}
      className="glass-card"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </div>
  );
}
