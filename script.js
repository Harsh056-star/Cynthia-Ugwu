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
    delay: -1,
    stagger: .2,
  })
  .from('#herofooter',{
    y: -10,
    opacity: 0,
    duration: 1.5,
    delay: -1,
    ease: Expo.easeInOut,
  })
}

var timeout;

//ok ab ye function h mouse ki movement ka jab mai jyada speed se move kr rha to ye flat ho ja rha h cursor ko ye krne ke liye uski min aur max value define kr paye aur jb min value ho to ye remove ho jaye wo flat hona
function circleflat(){
  //define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

    window.addEventListener("mousemove", function(dets){
      clearTimeout(timeout);
      // var xdiff = dets.clientX - xprev;
      // var ydiff = dets.clientY - yprev;
      xscale = gsap.utils.clamp(.8,1.2, dets.clientX - xprev);
      yscale = gsap.utils.clamp(.8,1.2, dets.clientY - yprev);

      xprev = dets.clientX;
      yprev = dets.clientY;

      cursor(xscale, yscale)
      timeout = setTimeout(function (){
         document.querySelector("#cursor").style.transform =`translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }, 100);

    });  
}
circleflat();
function cursor(xscale, yscale){
    window.addEventListener("mousemove", function(dets){
        // console.log(dets.clientX, dets.clientY);ye sara classify krta h kese cursor move hota h
        document.querySelector("#cursor").style.transform =`translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`
    })
}


cursor();
firstPageAnim();