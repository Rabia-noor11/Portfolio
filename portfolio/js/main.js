// Put a piece of HTML inside the element with the given id
function render(id, html) {
  document.getElementById(id).innerHTML = html;
}

render('navbar', Navbar(profile));
render('hero', Hero(profile));
render('skills', `<h2>Skills</h2><div class="grid">${skills.map(SkillCard).join('')}</div>`);
render('projects', `<h2>Projects</h2><div class="grid">${projects.map(ProjectCard).join('')}</div>`);
render('contact', Contact(profile));
render('footer', Footer(profile));

// Mobile menu: open / close with the hamburger button
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');

toggle.addEventListener('click', function () {
  const isOpen = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
});

// Close the menu after a link is tapped
links.addEventListener('click', function () {
  links.classList.remove('open');
  toggle.setAttribute('aria-expanded', false);
});
