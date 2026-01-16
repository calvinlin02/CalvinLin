// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute('href'));
//     if(target) {
//       target.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start' // or 'center'
//       });
//     }
//   });


document.querySelectorAll(".carousel-a4").forEach(carousel => {
    const track = carousel.querySelector(".carousel-a4-track");
    const slides = carousel.querySelectorAll(".carousel-a4-slide");
    const prevBtn = carousel.querySelector(".carousel-a4-btn.prev");
    const nextBtn = carousel.querySelector(".carousel-a4-btn.next");

    let index = 0;

    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener("click", () => {
      if (index > 0) {
        index--;
        update();
      }
    });

    nextBtn.addEventListener("click", () => {
      if (index < slides.length - 1) {
        index++;
        update();
      }
    });
});

function update() {
  track.style.transform = `translateX(-${index * 100}%)`;
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === slides.length - 1;
}

carousel.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") nextBtn.click();
  if (e.key === "ArrowLeft") prevBtn.click();
});
carousel.tabIndex = 0;