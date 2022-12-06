document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  let currentSectionIndex = 0;

  document.addEventListener("mousewheel", (e) => {
    let way = e.wheelDelta < 0 ? 1 : -1;
    if (way === 1) {
      const isLastSection = currentSectionIndex === sections.length - 1;
      if (isLastSection) return;
    } else {
      const isLastSection = currentSectionIndex === 0;
      if (isLastSection) return;
    }
    currentSectionIndex = currentSectionIndex + way;
    console.log(currentSectionIndex);
    console.log(sections[currentSectionIndex]);
    sections[currentSectionIndex].scrollIntoView(true);
  });
});
