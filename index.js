import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function Home() {
  useEffect(() => {
    // Function to remove the logo once it appears in the DOM
    const removeWatermark = () => {
      const splineViewer = document.querySelector('spline-viewer');
      
      if (splineViewer && splineViewer.shadowRoot) {
        const logo = splineViewer.shadowRoot.querySelector('#logo');
        if (logo) {
          logo.remove(); // Remove the watermark/logo
        }
      }
    };

    // Set up a MutationObserver to detect when the Spline viewer's shadow DOM is available
    const observer = new MutationObserver(() => {
      removeWatermark(); // Try to remove the watermark whenever the DOM updates
    });

    // Start observing the spline-viewer for changes
    const splineViewer = document.querySelector('spline-viewer');
    if (splineViewer) {
      observer.observe(splineViewer, { childList: true, subtree: true });
    }

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <Spline scene="https://prod.spline.design/rFyggwozwKESg4ty/scene.splinecode" />
    </main>
  );
}

