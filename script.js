
let phrases = ["Hello", "Good Day", "You are never too old", "to set another goal", " or to dream a new dream.  - C.S. Lewis", "Keep Safe!!", "-Erwin", "🙏👻"]
let demo = document.querySelector(".demo")
let animation = gsap.timeline({repeat:5, repeatDelay:7,})

function createLayers(){
  phrases.forEach(value => {
    let layer = document.createElement("div")
    layer.innerHTML = value
    demo.appendChild(layer)
  })
}

function animateText() {
  let layers = document.querySelectorAll(".demo div")
  layers.forEach(function(element, index){
    animation.fromTo(element, {opacity:0, scale:0}, {scale:1, opacity:1, repeat:1, yoyo:true, yoyoEase:true, repeatDelay:0.3})
  })
  gsap.set(".demo", {visibility:"visible"}) 
}

createLayers()
animateText()
