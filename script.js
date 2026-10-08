/* ==================================================
   MOBILE MENU
================================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}


document.querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });



/* ==================================================
   3D PROFILE CARD
================================================== */

const profileCard =
    document.querySelector(".profile-card");

if (profileCard) {

    profileCard.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                profileCard.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -10;

            const rotateY =
                ((x - centerX) / centerX) * 10;

            profileCard.style.transform =
                `rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.02)`;

        }
    );


    profileCard.addEventListener(
        "mouseleave",
        function () {

            profileCard.style.transform =
                "rotateX(0deg) rotateY(0deg) scale(1)";

        }
    );

}



/* ==================================================
   3D OUTPUT CARDS
================================================== */

const outputCards =
    document.querySelectorAll(".output-card");

outputCards.forEach(function (card) {

    card.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -5;

            const rotateY =
                ((x - centerX) / centerX) * 5;

            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)
                 scale(1.02)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        function () {

            card.style.transform =
                "";

        }
    );

});



/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements =
    document.querySelectorAll(
        ".glass-card, " +
        ".skill-card, " +
        ".project-card, " +
        ".output-card, " +
        ".contact-card, " +
        ".education-card"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


/* ==================================================
   REVEAL STYLE
================================================== */

const revealStyle =
    document.createElement("style");

revealStyle.innerHTML = `

    .glass-card.show,
    .skill-card.show,
    .project-card.show,
    .output-card.show,
    .contact-card.show,
    .education-card.show {

        opacity: 1 !important;

        transform:
            translateY(0) !important;

    }

`;

document.head.appendChild(revealStyle);



/* ==================================================
   GALAXY MOUSE EFFECT
================================================== */

document.addEventListener(
    "mousemove",
    function (event) {

        const x =
            (event.clientX / window.innerWidth - 0.5);

        const y =
            (event.clientY / window.innerHeight - 0.5);

        const planet1 =
            document.querySelector(".planet-1");

        const planet2 =
            document.querySelector(".planet-2");

        if (planet1) {

            planet1.style.marginLeft =
                `${x * 30}px`;

            planet1.style.marginTop =
                `${y * 30}px`;

        }

        if (planet2) {

            planet2.style.marginLeft =
                `${x * -20}px`;

            planet2.style.marginTop =
                `${y * -20}px`;

        }

    }
);



/* ==================================================
   CURRENT YEAR
================================================== */

console.log(
    "John Tristan Galaxy Portfolio loaded successfully."
);