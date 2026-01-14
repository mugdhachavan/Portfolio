/* ================= THEME TOGGLE ================= */
const toggleBtn = document.getElementById("darkToggle");

// Set default theme (Dark)
if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "dark");
}

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const theme = document.body.classList.contains("dark")
    ? "dark"
    : "light";

  localStorage.setItem("theme", theme);
});


/* ================= CONTACT FORM ================= */
const contactForm = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    successMsg.textContent = "Thank you! Your message has been sent.";
    this.reset();
  });
}


/* ================= SMOOTH SCROLL ================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});


/* ================= PROJECT DATA ================= */
/* const projects = {
  project1: {
    title: "Library Management System",
    description: "A frontend-based web application for managing library records.",
    points: [
      "Built using HTML, CSS, and JavaScript",
      "Responsive design",
      "Form validation and clean UI",
      "User-friendly navigation"
    ],
    github: "#",
    demo: "#"
  },
  project2: {
    title: "Student Information System",
    description: "A responsive UI to manage and display student data.",
    points: [
      "Structured layout using CSS Grid",
      "Input validation",
      "Focus on usability",
      "Clean and simple design"
    ],
    github: "#",
    demo: "#"
  },
  project3: {
    title: "Personal Portfolio Website",
    description: "Interactive portfolio website to showcase skills and projects.",
    points: [
      "Dark mode support",
      "Animations and smooth scrolling",
      "ATS-friendly structure",
      "Pure HTML, CSS, and JavaScript"
    ],
    github: "#",
    demo: "#"
  }
}; */


/* ================= PROJECT MODAL ================= */
function openProjectModal(project) {
  const modal = document.getElementById("projectModal");
  modal.style.display = "flex";

  document.getElementById("modalTitle").innerText = project.title;
  document.getElementById("modalDescription").innerText = project.description;

  const list = document.getElementById("modalPoints");
  list.innerHTML = "";

  project.points.forEach(point => {
    const li = document.createElement("li");
    li.textContent = point;
    list.appendChild(li);
  });

  document.getElementById("modalGithub").href = project.github;
  document.getElementById("modalDemo").href = project.demo;
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

// Close modal on outside click
window.addEventListener("click", function (e) {
  const modal = document.getElementById("projectModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
