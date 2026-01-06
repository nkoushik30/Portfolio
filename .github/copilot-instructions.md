# Portfolio Website - AI Coding Agent Instructions

## Architecture Overview
This is a static personal portfolio website built with HTML5 and CSS3. The site consists of a single `index.html` file with linked `Style.css` for styling. No JavaScript, backend, or build processes are used - it's pure static content.

## Key Components
- **Header Section**: Name, tagline, and tech stack display
- **Contact Information**: Location, phone, email, LinkedIn link
- **Professional Summary**: Career overview with highlight boxes for current focus and goals
- **Skills Section**: Categorized technical skills (Programming, Full-Stack, Cloud/DevOps, Data)
- **Projects Section**: Featured project cards with descriptions, technical achievements, and stacks
- **Workshops & Training**: Certifications and workshop details
- **Experience & Education**: Professional involvement and academic background
- **Closing Section**: Call-to-action with contact button

## Styling Conventions
- **Color Palette**: Premium luxury theme using CSS custom properties (e.g., `--rich-burgundy: #6b1f3a`, `--metallic-gold: #d4af37`)
- **Typography**: Playfair Display for headings, Inter for body text
- **Layout**: Responsive design with max-width containers, gradient backgrounds, and subtle shadows
- **Components**: 
  - `.section` class for major content blocks with bottom borders and accent lines
  - `.project-card` for project displays with hover effects
  - `.highlight-box` for emphasized content with left borders
  - `.btn` for call-to-action buttons with gradient backgrounds and hover animations

## Development Workflow
- Edit `index.html` for content changes
- Modify `Style.css` for styling updates
- Open `index.html` directly in browser for preview (no build required)
- Use semantic HTML elements (`<h1>-<h4>`, `<p>`, `<ul>`, `<div>`) with descriptive class names

## Content Patterns
- Use `<strong>` tags for emphasis within paragraphs
- Structure project details with `<h4>` subheadings (e.g., "Key Technical Achievements", "Technical Stack")
- Include emoji icons for contact info (📍, 📞, 📧, 💼)
- Format tech stacks as "Frontend: HTML5, CSS3, JavaScript<br>Backend: Firebase Authentication"

## File References
- [index.html](index.html): Main content structure and all portfolio information
- [Style.css](Style.css): Complete styling including responsive breakpoints for mobile (max-width: 640px)