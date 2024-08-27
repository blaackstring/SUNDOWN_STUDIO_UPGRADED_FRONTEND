
let tl=gsap.timeline();
tl.from(".right h1",{
    y:-20,
    durtion:10,
    repeat:-1,
    scale:1.01,
    yoyo:true
})
tl.from("button",{
    y:20,
    durtion:0.1,
    delay:0.1,
    scale:0.3,
    opacity:0,
 
   
})



gsap.from(".right,.left",{
    x:4000,
    duration:1,
    delay:0.2,
    stagger:-1,
    yoyo:true,
    rotate:200,    
    scrub:5
})

gsap.from(".page2 .h12",{
  x:1200,
    duration:6,
    rotate:40,
    scrollTrigger:{
        trigger:".page2 .h12",
        scroller:"body",
        start:"top 50%",
        end:"top -10%",
        scrub:4,
    }
 })
 

 gsap.from(".page2 .h11",{
    x:-900,
      duration:6,
    
      rotate:80,
      scrollTrigger:{
          trigger:".page2 .h11",
          scroller:"body",
          start:"top 50%",
          end:"top -10%",
          scrub:4,
      }
   })
   const lenis = new Lenis()

lenis.on('scroll', (e) => {

})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
  addEventListener
}

requestAnimationFrame(raf)  


let fixeddiv=document.querySelector('.fixedvdos')
let allvdos=document.querySelectorAll('.lft')

allvdos.forEach((x)=>{
    x.addEventListener('mouseenter',(e)=>{
        if(e.target){
        let y= x.getAttribute('data-image');
        console.log(y);
        
           fixeddiv.style.backgroundImage=`url(${y})`;//literal template
           fixeddiv.style.backgroundSize='cover';
           fixeddiv.style.backgroundPostion='center'
           fixeddiv.style.display='block'

        }
    })

    x.addEventListener('mouseleave',(e)=>{
        if(e.target){
       
           fixeddiv.style.display='none'

        }
    })
})
