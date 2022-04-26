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

const messiButton = document.getElementById('LMButton');
messiButton.addEventListener('click', function(e) {
  console.log('Messi button was clicked');
  location.href = myURL.concat("/messi");
});

const ronaldoButton = document.getElementById('CRButton');
ronaldoButton.addEventListener('click', function(e) {
  console.log('Ronaldo button was clicked');
  location.href = myURL.concat("/ronaldo");
});

const neymarButton = document.getElementById('NButton');
neymarButton.addEventListener('click', function(e) {
  console.log('Neymar button was clicked');
  location.href = myURL.concat("/neymar");
});

const salahButton = document.getElementById('MSButton');
salahButton.addEventListener('click', function(e) {
  console.log('Salah button was clicked');
  location.href = myURL.concat("/salah");
});