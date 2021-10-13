var ml4 = {};
ml4.opacityIn = [0, 1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 1.5;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 1000;

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml4 .letters-1",
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
  })
  .add({
    targets: ".ml4 .letters-1",
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay,
  })
  .add({
    targets: ".ml4 .letters-2",
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
  })
  .add({
    targets: ".ml4 .letters-2",
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay,
  })
  .add({
    targets: ".ml4 .letters-3",
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
  })
  .add({
    targets: ".ml4 .letters-3",
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay,
  })
  .add({
    targets: ".ml4 .letters-4",
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
  })
  .add({
    targets: ".ml4 .letters-4",
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay,
  });



const header = document.querySelector("header");
const headerHeight = parseInt(window.getComputedStyle(header).height);
const buttonScroll = document.getElementById("scrollTo");
let countAnimation1 = 0;
let countAnimation2 = 0;
function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    buttonScroll.style.display = "flex";
  } else {
    buttonScroll.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToTop() {
  if (window.scrollY > headerHeight) {
    header.classList.add("main-content__header--scroll");
  } else {
    header.classList.remove("main-content__header--scroll");
  }
}

function imageAnimation1() {
  const iframe = document.getElementById('image-01');
  const attr = iframe.getAttribute('data-scroll');
  if (attr === 'in' && countAnimation1 === 0) {
    iframe.src = iframe.src;
    countAnimation1++;
  } else if (attr === 'out') {
    countAnimation1 = 0;
  }
}

function imageAnimation2() {
  const iframe = document.getElementById('image-02');
  const attr = iframe.getAttribute('data-scroll');
  if (attr === 'in' && countAnimation2 === 0) {
    iframe.src = iframe.src;
    countAnimation2++;
  } else if (attr === 'out') {
    countAnimation2 = 0;
  }
}

window.addEventListener('scroll', () => {
  scrollFunction();
  scrollToTop();
  imageAnimation1();
  imageAnimation2();
});

buttonScroll.addEventListener('click', topFunction);


ScrollOut({
  targets: '#reveal, #translate-right, #image-01, #image-02'
})
