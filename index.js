document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.getElementById('cursor');

  document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
  });

  // Example of adding a shape animation
  const threeDContent = document.getElementById('threeD-content');
  threeDContent.addEventListener('click', () => {
      const shape = document.createElement('div');
      shape.style.width = '50px';
      shape.style.height = '50px';
      shape.style.backgroundColor = 'red';
      shape.style.position = 'absolute';
      shape.style.left = `${Math.random() * window.innerWidth}px`;
      shape.style.top = `${Math.random() * window.innerHeight}px`;
      shape.style.borderRadius = '50%';
      document.body.appendChild(shape);

      setTimeout(() => {
          shape.remove();
      }, 3000);
  });
});