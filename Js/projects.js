
const projects = [
  {
    title: "Antique Shop",
    image: "imgs/regisegekJocitol.png",
    description: "An online antique store project with clean design and dynamic layout.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://regisegekjocitol.netlify.app",
    github: "https://github.com/TheOfficialRaven/Antique"
  },
  {
    title: "Monte Bistro",
    image: "imgs/Montebistro.png",
    description: "A modern restaurant portfolio website with responsive design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://montebistro.netlify.app",
    github: "https://github.com/TheOfficialRaven/montebistro"
  }
];

function renderProjects() {
  const container = document.getElementById("projectContainer");

  projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card animate2 scroll";
    card.style.setProperty("--i", index + 2);

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title} image" onerror="this.src='imgs/placeholder.jpg';">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tech-stack">
        ${project.technologies.map(tech => `<span>${tech}</span>`).join("")}
      </div>
      <div class="links">
        ${project.link ? `<a href="${project.link}" target="_blank"><i class='bx bx-globe'></i> Live</a>` : ""}
        ${project.github ? `<a href="${project.github}" target="_blank"><i class='bx bxl-github'></i> GitHub</a>` : ""}
      </div>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderProjects);
