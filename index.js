import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function Home() {
  useEffect(() => {
    const removeWatermarks = () => {
      // Select all Spline elements
      const splineElements = document.querySelectorAll('spline-viewer');
      
      // Loop through each element to remove the watermark
      splineElements.forEach(element => {
        const shadowRoot = element.shadowRoot;
        if (shadowRoot) {
          const logo = shadowRoot.querySelector('#logo');
          if (logo) {
            logo.remove();
          }
        }
      });
    };

    // Use a timeout to ensure elements are loaded before watermark removal
    const timer = setTimeout(removeWatermarks, 1000); // Adjust delay as needed

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <Spline scene="https://prod.spline.design/rFyggwozwKESg4ty/scene.splinecode" />
    </main>
  );
}
