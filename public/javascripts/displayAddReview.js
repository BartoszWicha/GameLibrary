const showBtn = document.getElementById('showBtn');
const hideBtn = document.getElementById('hideBtn');
const body = document.getElementById('dim');

const slidingContainer = document.getElementById('slidingContainer');
// Show the container on "Show" button click
showBtn.addEventListener('click', () => {
    slidingContainer.classList.add('active');
    body.classList.add('active');
});

// Hide the container on "Hide" button click
hideBtn.addEventListener('click', () => {
    slidingContainer.classList.remove('active');
    body.classList.remove('active');
});

const scrollContainer = document.getElementById('overflowScroll');
const leftScrollButton = document.getElementById('leftScroll');
const rightScrollButton = document.getElementById('rightScroll');

leftScrollButton.addEventListener('click', () => {
    smoothScroll(scrollContainer, -200, 500);
  });

  rightScrollButton.addEventListener('click', () => {
     smoothScroll(scrollContainer, 200, 500);
  });

  function smoothScroll(container, distance, duration) {
    let start = container.scrollLeft;
    let startTime = null;

    function scrollStep(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let current = Math.min(progress / duration, 1); 
        container.scrollLeft = start + distance * current;

        if (progress < duration) {
            window.requestAnimationFrame(scrollStep);
        }
    }

    window.requestAnimationFrame(scrollStep);
}