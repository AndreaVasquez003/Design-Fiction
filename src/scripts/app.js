"use strict"
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

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

    const split = new SplitText(".item2 h3");
    const split2 = new SplitText(".item7 h3");
    const split3 = new SplitText(".item19 .h3__modif");
    const split4 = new SplitText(".item26 .h3__modif");
    const split5 = new SplitText(".item30 .h3__modif");
    const split6 = new SplitText(".item5 h4", ".item5 p");


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

gsap.from(split6.chars, {
    opacity: 0,
    stagger: 0.01,
    duration: 0.1,
    scrollTrigger: {
        trigger: ".item5 h4",
        start: "top 80%",
        end: "top center",
    }
});


