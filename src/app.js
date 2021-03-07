import "./img/virus.svg";
import "./style/style.css";
import "./script/component/option-list.js";
import "./script/component/card-item.js";
import Typed from "./script/view/typed.js";
import main from "./script/view/main.js";

const typed = new Typed('.typed', {
    strings: [
        "#StayAtHome",
        "Wear Mask",
        "Use Hand Sanitizer",
        "Maintain a Distance"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});





document.addEventListener("DOMContentLoaded", main);
