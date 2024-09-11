import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function Home() {
  useEffect(() => {
    // Function to remove the watermark image
    const removeWatermark = () => {
      const splineViewer = document.querySelector('spline-viewer');
      
      if (splineViewer && splineViewer.shadowRoot) {
        // Use shadowRoot to access elements inside the Spline viewer
        const watermarkImage = splineViewer.shadowRoot.querySelector('img[src="https://app.spline.design/_assets/_icons/icon_favicon32x32.png"]');
        
        if (watermarkImage) {
          console.log('Watermark image found and removed'); // Debugging line
          watermarkImage.remove(); // Remove the watermark image
        } else {
          console.log('Watermark image not found'); // Debugging line
        }
      }
    };

    // Use setTimeout to add a delay to ensure full loading
    const timeout = setTimeout(removeWatermark, 3000); // Adjust the delay as needed

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
