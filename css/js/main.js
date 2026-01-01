// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Active nav highlight
const links = document.querySelectorAll("nav a");
const sections = [...links].map(l => document.querySelector(l.getAttribute("href")));

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (section.getBoundingClientRect().top <= 80) {
      current = section.id;
    }
  });

  links.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
});
