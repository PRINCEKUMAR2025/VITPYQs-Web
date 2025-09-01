document.addEventListener('DOMContentLoaded', () => {
  // Animate stats when they come into view
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const animateStats = () => {
    statNumbers.forEach(stat => {
      const value = parseInt(stat.getAttribute('data-count'));
      let current = 0;
      const increment = value / 50; // Adjust for animation speed
      const timer = setInterval(() => {
        current += increment;
        stat.textContent = Math.floor(current);
        if (current >= value) {
          stat.textContent = value;
          clearInterval(timer);
        }
      }, 30);
    });
  };
  
  // Use Intersection Observer to trigger the animation
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats();
        observer.unobserve(entries[0].target);
      }
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);
  }
});
