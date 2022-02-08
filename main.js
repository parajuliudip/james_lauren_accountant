var questions = document.querySelectorAll("#question");
var answers = document.querySelectorAll("#answer");
var show = false;
questions.forEach((question, i) => {
  var answer = document.querySelector(`.answer-${i + 1}`);
  answer.style.display = "none";
  question.addEventListener("click", () => {
    show = !show;
    var symbol = document.querySelector(`.symbol-${i + 1}`);
    if (show == false) {
      answer.style.display = "none";
      symbol.innerHTML = "+";
    } else {
      answer.style.display = "";
      symbol.innerHTML = "-";
    }
  });
});
