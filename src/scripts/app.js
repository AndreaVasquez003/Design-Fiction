"use strict"

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

  document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.vid__el');
    video.play().catch(e => {
      console.log("Autoplay bloqué :", e);
    });
  });

const menuBurgerBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const Btn01Menu = document.querySelector('#Btn01');
const Btn02Menu = document.querySelector('#Btn02');
const Btn03Menu = document.querySelector('#Btn03');

Btn01Menu.addEventListener('click', () => {
  menuBurgerBtn.classList.toggle('open');
	menu.classList.toggle('open');
});

Btn02Menu.addEventListener('click', () => {
  menuBurgerBtn.classList.toggle('open');
	menu.classList.toggle('open');
});

Btn03Menu.addEventListener('click', () => {
  menuBurgerBtn.classList.toggle('open');
	menu.classList.toggle('open');
});

menuBurgerBtn.addEventListener('click', () => {
	menuBurgerBtn.classList.toggle('open');
	menu.classList.toggle('open');
});

let lastScrollTop = 0;
const navbar = document.querySelector('.menu');

window.addEventListener('scroll', () => {
  if (window.innerWidth >= 1200) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      navbar.style.top = "-100px";
    } else {
      navbar.style.top = "0";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
});

gsap.registerPlugin(ScrollTrigger);

gsap.set(".item1 .ligne__el1", { strokeDasharray: "700", strokeDashoffset: "700"});
gsap.to(".item1 .ligne__el1", {
    strokeDashoffset: "0",
  scrollTrigger: {
    trigger: ".item1 .ligne__el1",
    start: "top bottom",
    end: "top 50px",
    scrub: true,
  }
});

gsap.set(".item3 .ligne__el2", { strokeDasharray: "800", strokeDashoffset: "800"});
gsap.to(".item3 .ligne__el2", {
    strokeDashoffset: "0",
  scrollTrigger: {
    trigger: ".item3 .ligne__el2",
    start: "top 80%",
    end: "top 50px",
    scrub: true,
  }
});

gsap.set(".item6 .ligne__el3", { strokeDasharray: "1100", strokeDashoffset: "1100"});
gsap.to(".item6 .ligne__el3", {
    strokeDashoffset: "0",
  scrollTrigger: {
    trigger: ".item6 .ligne__el3",
    start: "top 80%",
    end: "top 50px",
    scrub: true,
  }
});

gsap.set(".item10 .ligne__el1", { strokeDasharray: "700", strokeDashoffset: "700"});
gsap.to(".item10 .ligne__el1", {
    strokeDashoffset: "0",
  scrollTrigger: {
    trigger: ".item10 .ligne__el1",
    start: "top 80%",
    end: "top 50px",
    scrub: true,
  }
});

gsap.set(".item12 .ligne__el4", { strokeDasharray: "4000", strokeDashoffset: "4000"});
gsap.to(".item12 .ligne__el4", {
    strokeDashoffset: "0",
  scrollTrigger: {
    trigger: ".item12 .ligne__el4",
    start: "top 62%",
    end: "top 50px",
    scrub: true,
  }
});

gsap.set(".item13 .ligne__el1", { strokeDasharray: "700", strokeDashoffset: "700"});
gsap.to(".item13 .ligne__el1", {
    strokeDashoffset: "0",
  scrollTrigger: {
    trigger: ".item13 .ligne__el1",
    start: "top 80%",
    end: "top 50px",
    scrub: true,
  }
});

gsap.set(".ligne__el5", { strokeDasharray: "1500", strokeDashoffset: "1500"});
gsap.to(".ligne__el5", {
    strokeDashoffset: "0",
  scrollTrigger: {
    trigger: ".ligne__el5",
    start: "top 80%",
    scrub: true,
  }
});

gsap.set(".item17 .ligne__el4", { strokeDasharray: "4000", strokeDashoffset: "4000"});
gsap.to(".item17 .ligne__el4", {
    strokeDashoffset: "0",
  scrollTrigger: {
    trigger: ".item17 .ligne__el4",
    start: "top 62%",
    end: "top 50px",
    scrub: true,
  }
});

gsap.set(".item18 .ligne__el1", { strokeDasharray: "700", strokeDashoffset: "700"});
gsap.to(".item18 .ligne__el1", {
    strokeDashoffset: "0",
  scrollTrigger: {
    trigger: ".item18 .ligne__el1",
    start: "top 80%",
    end: "top 50px",
    scrub: true,
  }
});

gsap.set(".item20 .ligne__el6", { strokeDasharray: "700", strokeDashoffset: "700"});
gsap.to(".item20 .ligne__el6", {
    strokeDashoffset: "0",
  scrollTrigger: {
    trigger: ".item20 .ligne__el6",
    start: "top 80%",
    end: "top 50px",
    scrub: true,
  }
});

gsap.set(".item22 .ligne__el6", { strokeDasharray: "800", strokeDashoffset: "800"});
gsap.to(".item22 .ligne__el6", {
    strokeDashoffset: "0",
  scrollTrigger: {
    trigger: ".item22 .ligne__el6",
    start: "top 80%",
    end: "top 50px",
    scrub: true,
  }
});

gsap.set(".ligne__el7", { strokeDasharray: "2500", strokeDashoffset: "2500"});
gsap.to(".ligne__el7", {
    strokeDashoffset: "0",
  scrollTrigger: {
    trigger: ".ligne__el7",
    start: "top 20%",
    scrub: true,
  }
});

gsap.set(".item29 .ligne__el1", { strokeDasharray: "700", strokeDashoffset: "700"});
gsap.to(".item29 .ligne__el1", {
    strokeDashoffset: "0",
  scrollTrigger: {
    trigger: ".item29 .ligne__el1",
    start: "top 80%",
    scrub: true,
  }
});

gsap.set(".item30 .ligne__el2", { strokeDasharray: "1000", strokeDashoffset: "1000"});
gsap.to(".item30 .ligne__el2", {
    strokeDashoffset: "0",
  scrollTrigger: {
    trigger: ".item30 .ligne__el2",
    start: "top 60%",
    end: "top 50px",
    scrub: true,
  }
});


gsap.set(".item31 .ligne__el8", { strokeDasharray: "700", strokeDashoffset: "700"});
gsap.to(".item31 .ligne__el8", {
    strokeDashoffset: "0",
  scrollTrigger: {
    trigger: ".item31 .ligne__el8",
    start: "top 80%",
    scrub: true,
  }
});

gsap.set(".item32 .ligne__el9", { strokeDasharray: "700", strokeDashoffset: "700"});
gsap.to(".item32 .ligne__el9", {
    strokeDashoffset: "0",
  scrollTrigger: {
    trigger: ".ligne__el9",
    start: "top 80%",
    scrub: true,
  }
});

gsap.set(".ligne__el8--modif1", { strokeDasharray: "700", strokeDashoffset: "700"});
gsap.to(".ligne__el8--modif1", {
    strokeDashoffset: "0",
  scrollTrigger: {
    trigger: ".ligne__el8--modif1",
    start: "top 80%",
    scrub: true,
  }
});

gsap.set(".ligne__el9--modif", { strokeDasharray: "700", strokeDashoffset: "700"});
gsap.to(".ligne__el9--modif", {
    strokeDashoffset: "0",
  scrollTrigger: {
    trigger: ".ligne__el9--modif",
    start: "top 80%",
    scrub: true,
  }
});

gsap.set(".item35 .ligne__el8--modif2", { strokeDasharray: "700", strokeDashoffset: "700"});
gsap.to(".item35 .ligne__el8--modif2", {
    strokeDashoffset: "0",
  scrollTrigger: {
    trigger: ".item35 .ligne__el8--modif2",
    start: "top 80%",
    scrub: true,
  }
});

gsap.set(".ligne__el9--modif2", { strokeDasharray: "700", strokeDashoffset: "700"});
gsap.to(".ligne__el9--modif2", {
    strokeDashoffset: "0",
  scrollTrigger: {
    trigger: ".ligne__el9--modif2",
    start: "top 80%",
    scrub: true,
  }
});

gsap.set(".item37 .ligne__el8--modif2", { strokeDasharray: "700", strokeDashoffset: "700"});
gsap.to(".item37 .ligne__el8--modif2", {
    strokeDashoffset: "0",
  scrollTrigger: {
    trigger: ".item37 .ligne__el8--modif2",
    start: "top 80%",
    scrub: true,
  }
});

gsap.set(".ligne__el10", { strokeDasharray: "2500", strokeDashoffset: "2500"});
gsap.to(".ligne__el10", {
    strokeDashoffset: "0",
  scrollTrigger: {
    trigger: ".ligne__el10",
    start: "top 30%",
    scrub: true,
  }
});

gsap.registerPlugin(SplitText);

  const split = new SplitText(".item2 h3");
  const split2 = new SplitText(".item7 h3");
  const split3 = new SplitText(".item19 .h3__modif");
  const split4 = new SplitText(".item26 .h3__modif");
  const split5 = new SplitText(".item30 .h3__modif");
  const split6 = new SplitText(".item5 h4, .item5 p");
  const split7 = new SplitText(".item9 h4, .item9 p");
  const split8 = new SplitText(".item23 p");
  const split9 = new SplitText(".item27 h4, .item27 p");

gsap.from(split.chars, {
    opacity: 0.1,
    stagger: 0.05,
    duration: 1,
    scrollTrigger: {
        trigger: ".item2 h3",
        start: "top 80%",
        scrub: true,
    }
});

gsap.from(split2.chars, {
    opacity: 0.1,
    stagger: 0.05,
    duration: 1.4,
    scrollTrigger: {
        trigger: ".item7 h3",
        start: "top 80%",
        end: "top 50px",
        scrub: true,
    }
});


gsap.from(split3.chars, {
    opacity: 0.1,
    stagger: 0.05,
    duration: 1.4,
    scrollTrigger: {
        trigger: ".item19 .h3__modif",
        start: "top 80%",
        end: "top center",
        scrub: true,
    }
});

gsap.from(split4.chars, {
    opacity: 0.1,
    stagger: 0.05,
    duration: 1.4,
    scrollTrigger: {
        trigger: ".item26 .h3__modif",
        start: "top 80%",
        end: "top center",
        scrub: true,
    }
});

gsap.from(split5.chars, {
    opacity: 0.1,
    stagger: 0.05,
    duration: 1.4,
    scrollTrigger: {
        trigger: ".item30 .h3__modif",
        start: "top 80%",
        end: "top center",
        scrub: true,
    }
});

gsap.from(split6.lines, {
    duration: 0.6,
    yPercent: 100,
    opacity: 0,
    stagger: 0.1,
    ease: "expo.out",
    scrollTrigger: {
        trigger: ".item5 h4, .item5 p",
        start: "top 80%",
        scrub:true,
    }
});

gsap.from(split7.lines, {
    duration: 0.6,
    yPercent: 100,
    opacity: 0,
    stagger: 0.1,
    ease: "expo.out",
    scrollTrigger: {
        trigger: ".item9 h4, .item9 p",
        start: "top 80%",
        scrub:true,
    }
});

gsap.from(split8.lines, {
    duration: 0.6,
    yPercent: 100,
    opacity: 0,
    stagger: 0.1,
    ease: "expo.out",
    scrollTrigger: {
        trigger: ".item23 p",
        start: "top 80%",
        scrub:true,
    }
});

gsap.from(split9.lines, {
    duration: 0.6,
    yPercent: 100,
    opacity: 0,
    stagger: 0.1,
    ease: "expo.out",
    scrollTrigger: {
        trigger: ".item27 h4, .item27 p",
        start: "top 80%",
        scrub:true,
    }
});

gsap.registerPlugin(ScrollToPlugin);

Btn01.onclick = function(){
  gsap.to(window,{duration: 0.5, scrollTo:".item5",})
}

Btn02.onclick = function(){
  gsap.to(window,{duration: 0.5, scrollTo:".item7",})
}

Btn03.onclick = function(){
  gsap.to(window,{duration: 0.5, scrollTo:".item19",})
}

BtnReseaux01.onclick = function(){
  document.location.href="https://www.facebook.com/people/Andrea-Vasquez/pfbid037BLeFZ41o5xQdEdNnhYyHHZ9SfexPR71NM4oNwKw2nWoUEdAg3VHecZWHqEzF6Ubl/?mibextid=wwXIfr&rdid=Hw6Blwch92WxCi3M&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Bk7xj1S8P%2F%3Fmibextid%3DwwXIfr"
}

BtnReseaux02.onclick = function(){
  document.location.href="https://www.instagram.com/andreavasquez8611/?igsh=MXhsMWVtd3dyMHFiZg%3D%3D&utm_source=qr#"
}




