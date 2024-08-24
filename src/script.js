document.querySelectorAll(".faq-drapdown").forEach((item) => {
  const question = item.querySelector(".faq-drapdown-ques");
  const answer = item.querySelector(".faq-drapdown-ans");
  const icon = item.querySelector(".faq-icon img");

  question.addEventListener("click", function () {
    toggleAnswer(answer, icon);
  });

  item.querySelector(".faq-icon").addEventListener("click", function (event) {
    event.stopPropagation();
    toggleAnswer(answer, icon);
  });
});

function toggleAnswer(answer, icon) {
  const isOpen = answer.classList.toggle("open");
  icon.src = isOpen
    ? "../assets/images/icon-minus.svg"
    : "../assets/images/icon-plus.svg";
}
