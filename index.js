import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function Home() {
  useEffect(() => {
    // Function to remove the #logo element from all spline-viewer elements
    const removeLogos = () => {
      const splineElements = document.querySelectorAll('spline-viewer');
      
      splineElements.forEach((splineElement) => {
        const shadowRoot = splineElement.shadowRoot;
        if (shadowRoot) {
          const logoElement = shadowRoot.querySelector('#logo');
          if (logoElement) {
            console.log('Logo element found and removed'); // Debugging line
            logoElement.remove(); // Remove the logo element
          } else {
            console.log('Logo element not found'); // Debugging line
          }
        }
      });
    };

    // Use setTimeout to add a delay to ensure full loading
    const timeout = setTimeout(removeLogos, 3000); // Adjust the delay as needed

    // Clean up the timeout when the component unmounts
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main>
      <Spline scene="https://prod.spline.design/rFyggwozwKESg4ty/scene.splinecode" />
    </main>
  );
}

