const sections = document.querySelectorAll(".section");
const div = document.querySelector(".bl");
const headerBtn = document.querySelectorAll(".header_btn")
const question_1 = document.querySelector(".qestion_1")
const question_2 = document.querySelector(".qestion_2")
const question_3 = document.querySelector(".qestion_3")

sections[0].scrollIntoView({
  behavior: "smooth",
  block: "start",
});
let currentSectionIndex = 0;
let flag = false;

document.addEventListener("mousewheel", function (e) {
  let way = e.wheelDelta < 0 ? 1 : -1;
  if (flag === true) {
    return;
  }
  flag = true;
  setTimeout(() => {
    flag = false;
  }, 500);
  if (way === 1) {
    const isLastSection = currentSectionIndex === sections.length - 1;
    if (isLastSection) return;
  } else {
    const isLastSection = currentSectionIndex === 0;
    if (isLastSection) return;
  }
  currentSectionIndex = currentSectionIndex + way;
  sections[currentSectionIndex].scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});


headerBtn.forEach(el => {
  el.addEventListener("click", btnsHeader)
}) 

function btnsHeader() {
  if (this.className === "header_btn btn_1"){
    question_1.classList.toggle("active")
    document.body.style.filter = "blur(.2)"
  }
  if (this.className === "header_btn btn_2"){
    question_1.classList.toggle("active")
  }
  if (this.className === "header_btn btn_3"){
    question_1.classList.toggle("active")
  }
}