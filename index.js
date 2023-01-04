// Get the element with the id "answer_yes"
var button = document.getElementById("answer_yes");

// Check if the element exists
if (button) {
  // Add a click event listener to the button
  button.addEventListener("click", function () {
    // Your code goes here

    hiddenDivs_yes = document.getElementsByClassName(
      "page__answer-yes_visibility_hidden"
    );
    first_yes = hiddenDivs_yes[0];
    first_yes.style.display = "flex";

    hiddenDivs_no = document.getElementsByClassName(
      "page__answer-no_visibility_hidden"
    );
    first_no = hiddenDivs_no[0];
    first_no.style.display = "none";
  });
} else {
  // The element does not exist
  console.error('Element with id "answer_yes" not found');
}

// Get the element with the id "answer_yes"
var button = document.getElementById("answer_no");

let answers = [
  "может !no ;)?",
  "подумай еще раз",
  "где таких парней еще найдешь?",
  "такой ответ не предусмотрен, попробуй еще раз",
];
// Check if the element exists
if (button) {
  // Add a click event listener to the button
  button.addEventListener("click", function () {
    // Your code goes here

    hiddenDivs_yes = document.getElementsByClassName(
      "page__answer-yes_visibility_hidden"
    );
    first_yes = hiddenDivs_yes[0];
    first_yes.style.display = "none";

    hiddenDivs_no = document.getElementsByClassName(
      "page__answer-no_visibility_hidden"
    );
    first_no = hiddenDivs_no[0];
    first_no.style.display = "flex";
    let index = Math.floor(Math.random() * answers.length);
    first_no.textContent = answers[index];
  });
} else {
  // The element does not exist
  console.error('Element with id "answer_yes" not found');
}
