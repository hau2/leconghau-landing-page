'use client';

import { useEffect, useState } from 'react';

const words = ['Giải Pháp Web', 'Website Chuyên Nghiệp', 'Hệ Thống Quản Lý', 'Ứng Dụng Mobile', 'Landing Page'];

export default function TypingText() {
  const [text, setText] = useState('');

  useEffect(() => {
    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let pause = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    function tick() {
      const word = words[wordIdx];
      if (pause > 0) {
        pause--;
        timeoutId = setTimeout(tick, 16);
        return;
      }

      if (!isDeleting) {
        charIdx++;
        setText(word.substring(0, charIdx));
        if (charIdx === word.length) {
          isDeleting = true;
          pause = 120;
        }
      } else {
        charIdx--;
        setText(word.substring(0, charIdx));
        if (charIdx === 0) {
          isDeleting = false;
          wordIdx = (wordIdx + 1) % words.length;
          pause = 30;
        }
      }
      const speed = isDeleting ? 30 : 60;
      timeoutId = setTimeout(tick, speed);
    }

    // Start after loader delay
    const startTimeout = setTimeout(tick, 2800);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <span className="gradient-text">{text}</span>
      <span className="typing-cursor" />
    </>
  );
}
