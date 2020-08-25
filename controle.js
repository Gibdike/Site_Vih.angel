var icones = [document.getElementById("wpp"), document.getElementById("instagram"), document.getElementById("github"), document.getElementById("linkedn")]
var logo = [document.getElementById("wpplogo"), document.getElementById("instagramlogo"), document.getElementById("githublogo"), document.getElementById("linkedinlogo")];
var classe = document.getElementById("oculos");
class Slide {
    constructor(slide, cx) {
        this.slide = document.querySelector(slide);
        this.cx = document.querySelector(cx);
    }

    onStart(event) {
        event.preventDefault();
        console.log('mousedown');
        this.cx.addEventListener('mousemove', this.onMove);
    }
    onMove(event) {
        console.log('moveu');
    }
    onEnd(event) {
        console.log('acabou');
        this.cx.addEventListener('mousemove', this.onMove);
    }
    addSlideEvents() {
        this.cx.addEventListener('mousedown', this.onStart)
        this.cx.addEventListener('mouseup', this.onEnd)
    }
    bindEvents() {
        this.onStart = this.onStart.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onEnd = this.onEnd.bind(this);
    }
    init() {
        this.addSlideEvents();
        return this;
    }
};
const slide = new Slide('.slide', '.slide ul li');
slide.init();

console.log(slide);

function hover() {
    icones[0].addEventListener('mouseover', function() {
        console.log('ta pressionando');
        logo[0].classList.add("press");
    });
    icones[0].addEventListener('mouseout', function() {
        console.log('saiu');
        logo[0].classList.remove("press");
    });
    icones[1].addEventListener('mouseover', function() {
        console.log('ta pressionando');
        logo[1].classList.add("press");
    });
    icones[1].addEventListener('mouseout', function() {
        console.log('saiu');
        logo[1].classList.remove("press");
    });
    icones[2].addEventListener('mouseover', function() {
        console.log('ta pressionando');
        logo[2].classList.add("press");
        classe.classList.add("oc");
    });
    icones[2].addEventListener('mouseout', function() {
        console.log('saiu');
        logo[2].classList.remove("press");
        classe.classList.remove("oc");
    });
    icones[3].addEventListener('mouseover', function() {
        console.log('ta pressionando');
        logo[3].classList.add("press");
    });
    icones[3].addEventListener('mouseout', function() {
        console.log('saiu');
        logo[3].classList.remove("press");
    });
};

function linkar() {
    icones[0].onclick = function() {
        window.open('https://api.whatsapp.com/send?phone=5565992328339');
    };
    icones[1].onclick = function() {
        window.open('https://www.instagram.com/vih.angel/');
    };
    icones[2].onclick = function() {
        window.open('https://github.com/Gibdike');
    };
    icones[3].onclick = function() {
        window.open('https://www.linkedin.com/in/vitoria-angel-silva-130003196/');
    };
};
hover();
linkar();