// ===============================
// PORTFOLIO JAVASCRIPT
// ===============================


// ===============================
// SMOOTH SCROLLING
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// NAVBAR EFFECT
// ===============================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5, 17, 32, 1)";

    } else {

        navbar.style.background =
            "rgba(5, 17, 32, 0.97)";

    }

});