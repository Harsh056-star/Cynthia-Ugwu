const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
//el means element aur ye main part pr apply hoga jisme saari website h
function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
  .to(".boundingmove", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 2,
    stagger: .2,
  })
}
function cursor(){
    window.addEventListener("mousemove", function(dets){
        // console.log(dets.clientX, dets.clientY);ye sara classify krta h kese cursor move hota h
        document.querySelector("#cursor").style.transform =`translate(${dets.clientX}px, ${dets.clientY}px)`
    })
}
cursor();
firstPageAnim();