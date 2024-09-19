import Spline from '@splinetool/react-spline';
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.pageX - 15}px, ${e.pageY - 15}px)`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <main>
      <div className="cursor"></div>
      <Spline scene="https://prod.spline.design/rFyggwozwKESg4ty/scene.splinecode" />
    </main>
  );
} 

