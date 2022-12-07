const sections = document.querySelectorAll(".section");
const div = document.querySelector(".bl");

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

window.addEventListener("mousemove", (e) => {
  console.log(e.clientX);
  console.log(e.clientY);
  div.style.transform = `translate(${(e.clientX / 100) * -1}px, ${
    (e.clientY / 100) * -1
  }px)`;
});
