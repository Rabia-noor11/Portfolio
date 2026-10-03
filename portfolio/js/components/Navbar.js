function Navbar(profile) {
  return `
    <nav class="nav" aria-label="Main">
      <a href="#hero" class="nav__logo">${profile.name}</a>

      <button class="nav__toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
        &#9776;
      </button>

      <ul class="nav__links" id="navLinks">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  `;
}
