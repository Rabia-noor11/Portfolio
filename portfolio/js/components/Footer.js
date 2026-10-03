function Footer(profile) {
  const year = new Date().getFullYear();

  return `
    <p class="footer">&copy; ${year} ${profile.name}. Built with HTML, CSS and JavaScript.</p>
  `;
}
