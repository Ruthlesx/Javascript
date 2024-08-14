
/* 
gsap.to(".box", {
  y: 100,
  x: 100,
  duration: 2,
  repeat: -2,
})

*/

/*  
gsap.set(".box", {
  opacity: 0,
  background: "yellow",
}) 


gsap.to(".box", {
  opacity: 1,
  background: "crimson",
  duration: 3,
  repeat: - 2,
  y: 100,
   
}) */


  gsap.from(".box1", {
    y: -200,
    duration: 3,
    ease: "linear", 
    repeat: -1,
    yoyo: true, 
  }) 

  gsap.fromTo(".box2", {
    y:200,
    opacity: 0,
  }, {
    opacity: 1,
    y: -200,
    duration: 3,
    ease: "linear",
    borderRadius: 0,
    repeat: -1,
    yoyo: true,

  })