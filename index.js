import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function Home() {
  useEffect(() => {
    // Function to remove the "Built with Spline" button once it appears
    const removeWatermark = () => {
      const splineViewer = document.querySelector('spline-viewer');
      
      if (splineViewer && splineViewer.shadowRoot) {
        // Use shadowRoot to access elements inside the Spline viewer
        const watermarkButton = splineViewer.shadowRoot.querySelector('a[href="https://spline.design/"]');
        if (watermarkButton) {
          watermarkButton.remove(); // Remove the "Built with Spline" button
        }
      }
    };

    
    const observer = new MutationObserver(() => {
      removeWatermark(); // Try to remove the watermark whenever the DOM updates
    });

    
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


