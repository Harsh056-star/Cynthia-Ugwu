const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
//el means element aur ye main part pr apply hoga jisme saari website h
function cursor(){
    window.addEventListener("mousemove", function(dets){
        // console.log(dets.clientX, dets.clientY);ye sara classify krta h kese cursor move hota h
        document.querySelector("#cursor").style.transform =`translate(${dets.clientX}px, ${dets.clientY}px)`
    })
}
cursor();