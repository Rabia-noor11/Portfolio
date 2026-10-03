# Rabia Noor - Responsive Portfolio

A responsive portfolio landing page built with plain HTML, CSS and JavaScript.

**Live demo:** add your GitHub Pages link here after deploying

## Framework choice
I chose plain HTML, CSS and JavaScript instead of a framework to strengthen my fundamentals. The UI is still component-based: each component is a JavaScript function that takes data and returns HTML, so pieces like `ProjectCard` are reused for every project.

## Structure
```
portfolio/
├── index.html
├── css/
│   ├── variables.css    # design tokens
│   └── styles.css       # layout and components
├── js/
│   ├── main.js          # renders the components
│   ├── data.js          # profile, skills, projects
│   └── components/      # Navbar, Hero, Card, Contact, Footer
└── README.md
```

## Design system
- Colors: primary `#6c63ff`, accent `#00d4aa`, background `#0f0f1a`
- Fonts: Poppins (headings), Inter (body)
- Spacing: 8px scale (8, 16, 24, 48, 96)
- Hierarchy: one H1, H2 section titles, one highlighted primary button

## Responsive behavior
Mobile-first with breakpoints at 600px (tablet) and 1024px (desktop). The navbar becomes a hamburger menu on mobile, and the card grid uses `auto-fit` columns.

## Run locally
No setup needed. Download the folder and open `index.html` in your browser.

## Author
Rabia Noor - [GitHub](https://github.com/Rabia-noor11) | [LinkedIn](https://www.linkedin.com/in/rabia-noor-10156b400)
