
var time = gsap.timeline();
time.from(".nav", {
  duration: 0.8,
  x: -100,
  ease: "Expo.easeInout",
  opacity: 0,
});
time.from("#im img", {
  duration: 0.8,
  x: 100,
  ease: "Expo.easeInout",
  opacity: 0,
});

time.from(".content", {
  duration: 0.8,
  x: 100,
  ease: "Expo.easeInout",
  opacity: 0,
});

