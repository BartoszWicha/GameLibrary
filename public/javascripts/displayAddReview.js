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
    scrollContainer.scrollBy({
      left: -200,  // Adjust this value for how much to scroll per click
      behavior: 'smooth'
    });
  });

  // Scroll right by 200px when the right button is clicked
  rightScrollButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: 200,  // Adjust this value for how much to scroll per click
      behavior: 'smooth'
    });
    console.log('back');
  });