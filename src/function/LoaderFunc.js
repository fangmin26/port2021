import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export const start = ()=> {
  //loader 적용
    setTimeout(() => {
      document.querySelector(".loader").classList.remove("loader--active");
      console.log("1차 호출");
    }, 100);
    setTimeout(() => {
      document.getElementById("root").classList.remove("lock");
      console.log("2차 호출");
      // //mainTitle
      const mainTitle = ()=>{
        let tl = gsap.timeline();
        tl.to("#header", {  top: 0 });
        tl.from(
          ".sec1 h2 span",
          {  opacity: 0, y: 0, stagger: 0.02, rotation: 0 },
          "+=0.2"
        )
        tl.to(
          ".sec1 h2 span",
          {  opacity: 1, y: 20, stagger: 0.06, rotation: 100 },
          "+=0.2"
        );

        tl.to("#dot", {
          duration: 0.6,
          width: 1000,
          x: 0,
          ease: "bounce.out",
        });
        // tl.from("#dot", {
        //   duration: 0.6,
        //   width: 0,
        //   x: 100,
        // });
        tl.to(".sec1 h3 strong", {
          duration: 0.4,
          opacity: 1,
          x: 0,
          ease: "power4.out",
        });
        tl.to(".sec1 h3 em", {
          duration: 0.4,
          opacity: 1,
          x: 0,
          ease: "power4.out",
        });
      };
      // //sec1Cont
      // const sec1Cont = ()=>{
      //   const subTit = gsap.utils.toArray(".sec2 .index_tit li");
      //   subTit.forEach((sub, i) => {
      //     ScrollTrigger.create({
      //       trigger: sub,
      //       toggleClass: "active",
      //       start: "top 90%",
      //       end: "top 40%",
      //       //  markers:true,
      //       //  scrub:true,
      //       toggleActions: "play none none none",
      //       once: true,
      //     });
      //   });
      //   const lists = gsap.utils.toArray(".sec2 .index_box li");
      //   lists.forEach((list, i) => {
      //     ScrollTrigger.create({
      //       trigger: list,
      //       toggleClass: "active",
      //       start: "top 90%",
      //       end: "top 40%",
      //       // markers: true,
      //       //  scrub:true,
      //       ease: "Elastic.easeOut.config(1,0.3)",
      //       delay: 0.3,
      //       toggleActions: "play none none none",
      //       once: true,
      //     });
      //   });
      //   let tl = gsap.timeline();
      //   // tl.to(".sec2 .index_box li .boxes h4 span", {
      //   //   transform: "translate(0%,0%)",
      //   //   delay: 1,
      //   //   opacity: 1,
      //   //   stagger: 0.2,
      //   // });
      //   tl.to(".sec2 .index_box li .desc p", {
      //     opacity: 1,
      //     // delay: 0.2,
      //     x: 0,
      //   });
      //   // ScrollTrigger.create({
      //   //   trigger: ".sec2 .index_box li .boxes h4 span",
      //   //   // pin: true,
      //   //   start: "top 50%",
      //   //   end: "top 20%",
      //   //   // markers: true,
      //   //   animation: tl,
      //   //   once: true,
      //   // });
      //   ScrollTrigger.create({
      //     trigger: ".sec2 .index_box li .desc p",
      //     // pin: true,
      //     start: "top 50%",
      //     end: "top 20%",
      //     // markers: true,
      //     animation: tl,
      //     once: true,
      //   });
      // }
      mainTitle();
      // sec1Cont();
    }, 100);
  }



