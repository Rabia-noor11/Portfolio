function Contact(profile) {
  // The email button only shows if an email is filled in data.js
  const emailButton = profile.email
    ? `<a href="mailto:${profile.email}" class="btn btn--primary">Email Me</a>`
    : '';

  return `
    <div class="contact">
      <h2>Let's Work Together</h2>
      <p class="muted">Open to internships and freelance opportunities.</p>

      <div class="hero__actions">
        ${emailButton}
        <a href="${profile.github}" class="btn btn--ghost" target="_blank" rel="noopener">GitHub</a>
        <a href="${profile.linkedin}" class="btn btn--ghost" target="_blank" rel="noopener">LinkedIn</a>
      </div>
    </div>
  `;
}
