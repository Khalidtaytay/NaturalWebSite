let backgrounds = document.querySelector('.backgrounds');
let background123 = document.querySelectorAll('div[class*="background"]');

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