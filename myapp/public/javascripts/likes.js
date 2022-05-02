// Define Like Button
const LikeButton = document.getElementById('likeButton');
LikeButton.addEventListener('click', function(e) {
  console.log('Like button was clicked');
  location.href = window.location.href.split('?')[0].concat("?vote=1");
});

// Define Dislike Button
const DislikeButton = document.getElementById('dislikeButton');
DislikeButton.addEventListener('click', function(e) {
  console.log('Dislike button was clicked');
  location.href = window.location.href.split('?')[0].concat("?vote=2");
});