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