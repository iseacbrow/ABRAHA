// change navbar styles on scroll

var navBar = document.getElementById("navBar");

let displayMenu = document.querySelector("#display-menu")
let hideMenu = document.querySelector("#hide-menu")

displayMenu.addEventListener("click", ()=>{
    document.querySelector(".nav-links").style.right = "0"
    document.querySelector("#hide-menu").style.display = "block"
    displayMenu.style.display = "none"
})

hideMenu.addEventListener("click", ()=>{
    document.querySelector(".nav-links").style.right = "-200px"
    document.querySelector("#hide-menu").style.display = "none"
    displayMenu.style.display = "block"
})




window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})



// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'bx bx-plus') {
            icon.className = 'bx bx-minus';
        } else {
            icon.className = 'bx bx-plus';
        }
    })
})






const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}


