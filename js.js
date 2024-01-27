const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let backgrounds = document.querySelector('.backgrounds');
let background123 = document.querySelectorAll('div[class*="background"]');

//cover image effect

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: backgrounds,
        start: 'top top',
        scrub: true,
    }
});

background123.forEach((bg) => {
    let speed = bg.getAttribute('data-speed');
    tl.to(bg, {
        y: 60 * speed,
        duration: 100,
    }, 0);
});

//scroll down
const button = document.querySelector('.btn');
let isAnimating = false;

button.addEventListener('click', function() {
    if (!isAnimating) {
        const targetPercentage = 0.241;
        const targetPosition = document.body.scrollHeight * targetPercentage;
        slowScroll(targetPosition);
    } else {
        isAnimating = false; // Stop the current animation if the button is clicked again
    }
});

function slowScroll(targetPosition) {
    isAnimating = true;

    const startScroll = window.scrollY;
    const duration =2000; // 10 seconds
    const startTime = performance.now();

    function animateScroll(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const newPosition = startScroll + (targetPosition - startScroll) * progress;

        window.scrollTo(0, newPosition);

        if (progress < 1 && isAnimating) {
            requestAnimationFrame(animateScroll);
        } else {
            isAnimating = false; // Reset the flag when the animation is complete
        }
    }

    requestAnimationFrame(animateScroll);
}
