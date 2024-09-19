import Spline from '@splinetool/react-spline';
import React, { useEffect } from 'react';
import './styles.css'; // Make sure to import the CSS file

export default function Home() {
  useEffect(() => {
    // Adding the mousemove event listener
    const cursor = document.querySelector('.cursor');
    
    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.pageX - 15}px, ${e.pageY - 15}px)`;
      }
    };

    // Add event listener when the component mounts
    document.addEventListener('mousemove', moveCursor);

    // Clean up event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <main>
      <div className="cursor"></div>
      
      {/* Spline scene */}
      <Spline scene="https://prod.spline.design/rFyggwozwKESg4ty/scene.splinecode" />
    </main>
  );
}
