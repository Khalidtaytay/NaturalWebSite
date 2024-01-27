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
let button = document.querySelector('.btn');

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

//scroll dow
document.querySelector('.btn').addEventListener('click', function() {
    // Scroll down to 70% of the page height with slow and smooth effect
    const targetPercentage = 1;
    const targetPosition = document.body.scrollHeight * targetPercentage;
    slowScroll(targetPosition, 10000);
});

function slowScroll(targetPosition, duration) {
    const startPosition = window.scrollY;
    const startTime = performance.now();

    function animateScroll(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const newPosition = startPosition + (targetPosition - startPosition) * progress;

        window.scrollTo(0, newPosition);

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }

    requestAnimationFrame(animateScroll);
}
button.addEventListener('click',scrolldown)
