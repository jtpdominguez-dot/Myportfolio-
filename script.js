// ===============================
// PORTFOLIO JAVASCRIPT
// ===============================

// Get all navigation buttons
const navLinks = document.querySelectorAll(".nav-link");

// Get all sections
const sections = document.querySelectorAll(".content-section");

// ===============================
// NAVIGATION
// ===============================

navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const targetId = this.getAttribute("data-section");

        // Hide all sections
        sections.forEach(section => {
            section.style.display = "none";
        });

        // Show selected section
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.style.display = "block";
        }

        // Remove active class
        navLinks.forEach(nav => {
            nav.classList.remove("active");
        });

        // Add active class
        this.classList.add("active");
    });
});


// ===============================
// FILE VIEWER
// ===============================

function viewFile(file) {

    if (!file) {
        alert("No file selected.");
        return;
    }

    const fileURL = URL.createObjectURL(file);

    const fileViewer = document.getElementById("fileViewer");
    const viewerContent = document.getElementById("viewerContent");

    if (!fileViewer || !viewerContent) {
        alert("File viewer was not found in the HTML.");
        return;
    }

    viewerContent.innerHTML = "";

    // IMAGE
    if (file.type.startsWith("image/")) {

        const image = document.createElement("img");

        image.src = fileURL;
        image.alt = "Portfolio Activity";

        image.style.maxWidth = "100%";
        image.style.maxHeight = "80vh";
        image.style.display = "block";
        image.style.margin = "auto";

        viewerContent.appendChild(image);
    }

    // PDF
    else if (file.type === "application/pdf") {

        const pdf = document.createElement("iframe");

        pdf.src = fileURL;

        pdf.style.width = "100%";
        pdf.style.height = "80vh";
        pdf.style.border = "none";

        viewerContent.appendChild(pdf);
    }

    else {
        alert("Please upload an image or PDF file.");
        return;
    }

    fileViewer.style.display = "flex";
}


// ===============================
// CLOSE FILE VIEWER
// ===============================

function closeViewer() {

    const fileViewer = document.getElementById("fileViewer");

    if (fileViewer) {
        fileViewer.style.display = "none";
    }

    const viewerContent = document.getElementById("viewerContent");

    if (viewerContent) {
        viewerContent.innerHTML = "";
    }
}


// ===============================
// QUIZ FILE
// ===============================

const quizInput = document.getElementById("quizFile");

if (quizInput) {

    quizInput.addEventListener("change", function () {

        const file = this.files[0];

        if (file) {
            viewFile(file);
        }

    });
}


// ===============================
// LABORATORY FILE
// ===============================

const laboratoryInput = document.getElementById("laboratoryFile");

if (laboratoryInput) {

    laboratoryInput.addEventListener("change", function () {

        const file = this.files[0];

        if (file) {
            viewFile(file);
        }

    });
}


// ===============================
// EXAMINATION FILE
// ===============================

const examinationInput = document.getElementById("examinationFile");

if (examinationInput) {

    examinationInput.addEventListener("change", function () {

        const file = this.files[0];

        if (file) {
            viewFile(file);
        }

    });
}


// ===============================
// UPLOAD / SAVE FILE
// ===============================

function uploadFile(inputId, messageId) {

    const input = document.getElementById(inputId);

    if (!input || !input.files.length) {
        alert("Please select a picture or PDF first.");
        return;
    }

    const file = input.files[0];

    // Check file type
    const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "image/webp",
        "application/pdf"
    ];

    if (!allowedTypes.includes(file.type)) {
        alert("Only JPG, PNG, WEBP, and PDF files are allowed.");
        return;
    }

    // Save information temporarily in browser
    const fileURL = URL.createObjectURL(file);

    localStorage.setItem(
        inputId + "_name",
        file.name
    );

    localStorage.setItem(
        inputId + "_type",
        file.type
    );

    if (messageId) {

        const message = document.getElementById(messageId);

        if (message) {
            message.textContent =
                "Uploaded: " + file.name;
        }
    }

    alert("File uploaded successfully!");

    viewFile(file);
}


// ===============================
// BUTTON FUNCTIONS
// ===============================

function uploadQuiz() {
    uploadFile("quizFile", "quizMessage");
}

function uploadLaboratory() {
    uploadFile("laboratoryFile", "laboratoryMessage");
}

function uploadExamination() {
    uploadFile("examinationFile", "examinationMessage");
}


// ===============================
// PAGE LOAD
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // Hide all sections first
    sections.forEach(section => {
        section.style.display = "none";
    });

    // Show HOME
    const homeSection = document.getElementById("home");

    if (homeSection) {
        homeSection.style.display = "block";
    }

    // Make HOME active
    if (navLinks.length > 0) {
        navLinks.forEach(nav => {
            nav.classList.remove("active");
        });

        navLinks[0].classList.add("active");
    }

});


// ===============================
// CLOSE VIEWER WHEN CLICKING OUTSIDE
// ===============================

window.addEventListener("click", function (event) {

    const fileViewer = document.getElementById("fileViewer");

    if (event.target === fileViewer) {
        closeViewer();
    }

});