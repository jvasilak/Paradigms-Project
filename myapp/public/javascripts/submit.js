const thisURL = "http://student04.cse.nd.edu:52011";

// Submit Button
const Submit = document.getElementById('SubmitButton');
Submit.addEventListener('click', function(e) {
  console.log('Submit button was clicked');

  const Answers = ['1', '3', '4', '2', '1'];
  let ans1 = document.getElementById("Q1").value;
  let ans2 = document.getElementById("Q2").value;
  let ans3 = document.getElementById("Q3").value;
  let ans4 = document.getElementById("Q4").value;
  let ans5 = document.getElementById("Q5").value;
  
  if(ans1 == Answers[0] &&
    ans2 == Answers[1] &&
    ans3 == Answers[2] &&
    ans4 == Answers[3] &&
    ans5 == Answers[4]) {
    location.href = thisURL.concat("/success");
  } else {
    location.href = thisURL.concat("/failure");
  }
});