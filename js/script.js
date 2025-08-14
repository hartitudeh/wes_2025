AOS.init({ duration: 700 });

// Countdown to Oct 30, 2025 09:00 local
const target = new Date("2025-10-30T09:00:00");
function tick() {
  const now = new Date();
  const d = Math.max(0, target - now);
  const days = Math.floor(d / (1000 * 60 * 60 * 24));
  const hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((d % (1000 * 60)) / 1000);
  document.getElementById("cd-days").textContent = days;
  document.getElementById("cd-hours").textContent = hours;
  document.getElementById("cd-mins").textContent = mins;
  document.getElementById("cd-secs").textContent = secs;
}
setInterval(tick, 1000);
tick();

// Theme toggle
const themeBtn = document.getElementById("themeToggle");
if (localStorage.getItem("wes-theme") === "light") {
  document.documentElement.classList.add("light");
  themeBtn.textContent = "☀️";
}
themeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("light");
  const isLight = document.documentElement.classList.contains("light");
  themeBtn.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("wes-theme", isLight ? "light" : "dark");
});

// Navbar Toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  navToggle.classList.toggle("open");
});


// Modals
const registerModal = document.getElementById("registerModal");
const bioModal = document.getElementById("bioModal");
const openRegister = document.getElementById("openRegister");
const heroRegister = document.getElementById("heroRegister");
const clickRegister = document.getElementById("clickRegister");
openRegister.addEventListener("click", () => {
  registerModal.style.display = "flex";
});
heroRegister.addEventListener("click", () => {
  registerModal.style.display = "flex";
});
clickRegister.addEventListener("click", () => {
  registerModal.style.display = "flex";
});
document.querySelectorAll(".modal .close").forEach((b) =>
  b.addEventListener("click", () => {
    b.closest(".modal").style.display = "none";
  })
);
window.addEventListener("click", (e) => {
  if (e.target.classList && e.target.classList.contains("modal"))
    e.target.style.display = "none";
});

// Speaker bios
document.querySelectorAll(".view-bio").forEach((btn) => {
  btn.addEventListener("click", () => {
    const idx = btn.getAttribute("data-index");
    const card = document.querySelectorAll(".speaker-card")[idx - 1];
    const name = card.querySelector("h3").textContent;
    const role = card.querySelector(".role").textContent;
    const img = card.querySelector("img").src;
    document.getElementById("bioName").textContent = name;
    document.getElementById("bioTitle").textContent = role;
    document.getElementById("bioText").textContent =
      "Improving the GDP and bringing about high rates of employment in a every Nation to champion an emergent economy in all developing countries through an ecosystem of self sustaining entrepreneurs.";
    document.getElementById("bioImg").src = img;
    bioModal.style.display = "flex";
  });
});

// Form demos
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Registration submitted successfully");
    this.reset();
    registerModal.style.display = "none";
  });
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent");
  this.reset();
});
document.getElementById("newsForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Subscribed");
  this.reset();
});
