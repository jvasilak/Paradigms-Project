console.log('Client-side code running');

const myURL = "http://student04.cse.nd.edu:52057";

// Define Top Buttons
const TeamButton = document.getElementById('TeamButton');
TeamButton.addEventListener('click', function(e) {
  console.log('Team View button was clicked');
  location.href = myURL.concat("/team");
});

const indexButton = document.getElementById('homeButton');
indexButton.addEventListener('click', function(e) {
  console.log('Index button was clicked');
  location.href = myURL.concat("/");
});