import gsap from "gsap";
import { Power0 } from "gsap/all";

gsap.defaults({ ease: Power0.easeNone, duration: 0.2 });

const collapseMenuAnim = (spans) => {
  gsap
    .timeline()
    .to(spans[1], { scale: 0 }, "first")
    .to(spans[0], { y: 9 }, "<")
    .to(spans[2], { y: -9 }, "<")
    .to(spans[0], { rotation: 135, y: 8 }, ">0.1")
    .to(spans[2], { rotation: 45 }, "<");
};

const openMenuAnim = (spans) => {
  gsap
    .timeline()
    .to(spans[0], { rotation: 0 }, "first")
    .to(spans[2], { rotation: 0 }, "<")
    .to(spans[1], { scale: 1 }, ">0.1")
    .to(spans[0], { y: 0 }, "<")
    .to(spans[2], { y: 0 }, "<");
};

const menuAnim = (option, spans) => {
  option ? collapseMenuAnim(spans) : openMenuAnim(spans);
};

export default menuAnim;
