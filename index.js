import Spline from '@splinetool/react-spline';
import React, { useEffect } from 'react';
import './styles.css'; // Make sure to import the CSS

export default function Home() {
  useEffect(() => {
    // Target the cursor div
    const cursor = document.querySelector('.cursor');

    const moveCursor = (e) => {
      // Check if the cursor div exists
      if (cursor) {
        cursor.style.transform = `translate(${e.pageX - 15}px, ${e.pageY - 15}px)`;
      }
    };

    // Add the event listener to track mouse movement
    document.addEventListener('mousemove', moveCursor);

    // Remove the event listener when the component is unmounted
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <main>
      {/* The circle cursor div */}
      <div className="cursor"></div>
      
      {/* The Spline 3D scene */}
      <Spline scene="https://prod.spline.design/rFyggwozwKESg4ty/scene.splinecode" />
    </main>
  );
}

