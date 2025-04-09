const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');
menu.style.transform = 'translateX(0%)';
// Toggle the menu when the button is clicked
menuButton.addEventListener('click', () => {
    if (menu.style.transform === 'translateX(0%)') {
        menu.style.transform = 'translateX(-100%)';

    } else {
        menu.style.transform = 'translateX(0%)';
    }
});







const prompt = document.getElementById('prompt');
const tool = document.getElementById('tool');
const tools = document.getElementById('tool');

gsap.from(prompt, {
    x:-1000,
    ease: 'elastic.out',
    duration: 1,
})
gsap.from(tools, {
    x:1000,
    ease: 'elastic.out',
    duration: 1,
   
})

const slider = document.getElementById('slider')
slider.style.transform = 'translateX(33%)'
gsap.to(slider,{
  xPercent: -10 * (10),
  ease: "none",
  scrollTrigger: {
    trigger: "#slider",
    start: "top top",
    pin: true,
    scrub: 1,
    end: "+=2000",

  }
});

window.addEventListener('scroll', () => {
    // Get the scroll percentage
    const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    // Calculate the offset values for prompt and tool
    const promptOffset = 100 * scrollPercentage; // Moves out from left
    const toolOffset = 100 * scrollPercentage; // Moves out from right
    // console.log(scrollPercentage);
    // Apply the transformations based on scroll percentage
    prompt.style.transform = ` translateX(-${promptOffset}%)`;
    tool.style.transform = ` translateX(${toolOffset}%)`;

    // if(scrollPercentage>0 && scrollPercentage<1){
      // slider.style.transform = `translateX(-${scrollPercentage*100}%)`
      

      // });
     
    // }


});






// const container = document.querySelector(".container");
// const sections = gsap.utils.toArray(".container section");
// const texts = gsap.utils.toArray(".anim");
// const mask = document.querySelector(".mask");

// let scrollTween = gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1) *2,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".container",
//     pin: true,
//     scrub: 1,
//     end: "+=3000",
//     //snap: 1 / (sections.length - 1),
//     markers: true,
//   }
// });

// console.log(1 / (sections.length - 1))

// //Progress bar animation

// gsap.to(mask, {
//   width: "100%",
//   scrollTrigger: {
//     trigger: "#wrapper",
//     start: "top left",
//     scrub: 1
//   }
// });

// // whizz around the sections
// sections.forEach((section) => {
//   // grab the scoped text
//   let text = section.querySelectorAll(".anim");
  
//   // bump out if there's no items to animate
//   if(text.length === 0)  return 
  
//   // do a little stagger
//   gsap.from(text, {
//     y: -130,
//     opacity: 0,
//     duration: 2,
//     ease: "elastic",
//     stagger: 0.1,
//     scrollTrigger: {
//       trigger: section,
//       containerAnimation: scrollTween,
//       start: "left center",
//       markers: true
//     }
//   });
// });
