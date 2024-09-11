import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function Home() {
  useEffect(() => {
    // Function to remove the watermark button
    const removeWatermark = () => {
      const splineViewer = document.querySelector('spline-viewer');
      
      if (splineViewer && splineViewer.shadowRoot) {
        // Use shadowRoot to access elements inside the Spline viewer
        const watermarkButton = splineViewer.shadowRoot.querySelector('a[href="https://spline.design/?utm_source=spline-viewer&utm_campaign=spline-logo"]');
        
        if (watermarkButton) {
          console.log('Watermark button found and removed'); // Debugging line
          watermarkButton.remove(); // Remove the watermark button
        } else {
          console.log('Watermark button not found'); // Debugging line
        }
      }
    };

    // Use setTimeout to add a delay for debugging purposes
    const timeout = setTimeout(removeWatermark, 3000); // Delay for 3 seconds to allow full loading

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
