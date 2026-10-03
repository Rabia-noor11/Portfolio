function SkillCard(skill) {
  return `
    <article class="card">
      <h3>${skill.title}</h3>
      <p class="muted">${skill.desc}</p>
    </article>
  `;
}

function ProjectCard(project) {
  // The "Code" button only shows if the project has a repo link
  const codeButton = project.repo
    ? `<a href="${project.repo}" class="btn btn--ghost btn--sm" target="_blank" rel="noopener">Code</a>`
    : '';

  return `
    <article class="card">
      <span class="tag">Project</span>
      <h3>${project.title}</h3>
      <p class="muted">${project.desc}</p>

      <div class="hero__actions">
        <a href="${project.live}" class="btn btn--primary btn--sm" target="_blank" rel="noopener">Live</a>
        ${codeButton}
      </div>
    </article>
  `;
}
