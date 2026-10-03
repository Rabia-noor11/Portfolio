function Hero(profile) {
  return `
    <p class="hero__eyebrow">Hello, I'm</p>
    <h1>${profile.name}<br><span>${profile.role}</span></h1>
    <p class="muted">${profile.tagline}</p>

    <div class="hero__actions">
      <a href="#projects" class="btn btn--primary">View Projects</a>
      <a href="#contact" class="btn btn--ghost">Contact Me</a>
    </div>
  `;
}
