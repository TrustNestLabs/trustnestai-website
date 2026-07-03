/* ==========================
   TrustNest AI Premium JS
========================== */

// Sticky Navbar
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 40) {
        header.style.background = "rgba(5,15,30,.98)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";
    } else {
        header.style.background = "rgba(5,15,30,.92)";
        header.style.boxShadow = "none";
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// Counter Animation

const counters = document.querySelectorAll(".hero-stats h2");

let started = false;

window.addEventListener("scroll", () => {

    if (started) return;

    const section = document.querySelector(".hero-stats");

    const position = section.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        started = true;

        counters.forEach(counter => {

            const targetText = counter.innerText;

            const target = parseInt(targetText.replace(/\D/g, ""));

            let count = 0;

            const speed = target / 80;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerHTML = Math.floor(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerHTML = targetText;

                }

            }

            update();

        });

    }

});

// Fade Animation

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .2

});

document.querySelectorAll(".card,.feature,.dashboard-card,.about,.contact").forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// Ripple Button Effect

document.querySelectorAll(".primary-btn,.secondary-btn,.nav-btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = diameter + "px";

        circle.style.left = e.offsetX - diameter / 2 + "px";

        circle.style.top = e.offsetY - diameter / 2 + "px";

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple) ripple.remove();

        this.appendChild(circle);

    });

});

// Typing Cursor

const title = document.querySelector(".hero h1");

title.style.borderRight = "4px solid #31b6ff";

setInterval(() => {

    title.style.borderRightColor =
        title.style.borderRightColor === "transparent"
            ? "#31b6ff"
            : "transparent";

}, 500);

console.log("🚀 TrustNest AI Premium Loaded");