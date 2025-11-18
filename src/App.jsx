import { useState } from 'react';

const skills = ['JavaScript', 'React', 'TypeScript', 'CSS', 'Python', 'Node.js', 'Rust'];

const content = {
  en: {
    navLinks: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: {
      eyebrow: 'Frontend Developer',
      title: 'Turning ideas into polished web experiences.',
      description:
        'I craft performant and inclusive interfaces with a focus on clean design systems, intuitive user flows, and delightful micro-interactions.',
      ctaLabel: 'View work',
      portraitAlt: 'Portrait',
    },
    about: {
      sectionLabel: 'About',
      title: 'Who I am',
      body:
        'I am a full stack developer who mostly specializes in building performant web applications, I am very skilled using Django, flask, sanic, and I am proficient at using asynchronous programming paradigms to build scalable backend services. I enjoy turning complex requirements into engaging experiences. I balance careful planning with rapid iterations to keep progress tangible at every stage.',
      skillsTitle: 'Skills',
    },
    projects: {
      sectionLabel: 'Projects',
      title: 'Selected work',
      ctaLabel: 'View project',
      items: [
        {
          title: 'Tu Veterinario',
          description:
            'Django application implementing a blog system for a veterinary clinic to share pet care tips and news about the agro industry in antioquia',
          tags: ['Django', 'Bootstrap', 'Python'],
          link: 'https://github.com/zw5/Tu_veterinario',
        },
        {
          title: 'Paste.ee API',
          description:
            'Async API wrapper for paste.ee service allowing users to create, retrieve, and manage text pastes programmatically.',
          tags: ['Python', 'AIOHTTP', 'API'],
          link: 'https://github.com/zw5/pastee',
        },
        {
          title: 'discord.radio',
          description: 'Discord bot coded using python and serenity-rs framework to play music in voice channels.',
          tags: ['Python', 'Serenity-RS'],
          link: 'https://github.com/zw5/discord-radio',
        },
      ],
    },
    contact: {
      sectionLabel: 'Contact',
      title: 'Get in touch',
    },
    footer: {
      text: 'Simon Velez Villegas. All rights reserved.',
    },
    toggleLabel: 'Switch to Spanish',
  },
  es: {
    navLinks: [
      { label: 'Inicio', href: '#home' },
      { label: 'Sobre mi', href: '#about' },
      { label: 'Proyectos', href: '#projects' },
      { label: 'Contacto', href: '#contact' },
    ],
    hero: {
      eyebrow: 'Desarrollador frontend',
      title: 'Transformo ideas en experiencias web pulidas.',
      description:
        'Creo interfaces inclusivas y de alto rendimiento con enfasis en sistemas de diseno claros, flujos intuitivos y microinteracciones memorables.',
      ctaLabel: 'Ver trabajo',
      portraitAlt: 'Retrato',
    },
    about: {
      sectionLabel: 'Sobre mi',
      title: 'Quien soy',
      body:
        'Soy especialista en frontend y disfruto convertir requisitos complejos en experiencias atractivas. Equilibro la planeacion cuidadosa con iteraciones rapidas para que el progreso sea tangible en cada etapa.',
      skillsTitle: 'Habilidades',
    },
    projects: {
      sectionLabel: 'Proyectos',
      title: 'Trabajo destacados',
      ctaLabel: 'Ver proyecto',
      items: [
        {
          title: 'Tu Veterinario',
          description:
            'Aplicacion Django para la clinica veterinaria Tu Veterinario que integra un blog con consejos de cuidado y noticias del agro en Antioquia.',
          tags: ['Django', 'Bootstrap', 'Python'],
          link: 'https://github.com/zw5/Tu_veterinario',
        },
        {
          title: 'Paste.ee API',
          description:
            'Cliente asincrono para la API de paste.ee que permite crear, consultar y administrar textos de forma programatica.',
          tags: ['Python', 'AIOHTTP', 'API'],
          link: 'https://github.com/zw5/pastee',
        },
        {
          title: 'discord.radio',
          description:
            'Bot de Discord desarrollado con Python y Serenity-RS para reproducir musica en canales de voz.',
          tags: ['Python', 'Serenity-RS'],
          link: 'https://github.com/zw5/discord-radio',
        },
      ],
    },
    footer: {
      text: 'Simon Velez Villegas. Todos los derechos reservados.',
    },
    toggleLabel: 'Cambiar a ingles',
  },
};

const App = () => {
  const [locale, setLocale] = useState('en');
  const current = content[locale];
  const { navLinks, hero, about, projects, footer, toggleLabel } = current;
  const currentYear = new Date().getFullYear();

  return (
    <div className="app">
      <header className="hero" id="home">
        <nav className="nav">
          <span className="logo">ZW</span>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <button
            className="lang-toggle"
            type="button"
            onClick={() => setLocale((prev) => (prev === 'en' ? 'es' : 'en'))}
            aria-label={toggleLabel}
          >
            {locale === 'en' ? 'ESPAÑOL' : 'ENGLISH'}
          </button>
        </nav>
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p>{hero.description}</p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                {hero.ctaLabel}
              </a>
            </div>
          </div>
          <figure className="hero-portrait">
            <img src="/profile.jpg" alt={hero.portraitAlt} />
          </figure>
        </div>
      </header>

      <main>
        <section className="section" id="about">
          <div className="section-heading">
            <span>{about.sectionLabel}</span>
            <h2>{about.title}</h2>
          </div>
          <div className="section-content two-col">
            <p>{about.body}</p>
            <div>
              <h3>{about.skillsTitle}</h3>
              
              <ul className="pill-list">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section accent" id="projects">
          <div className="section-heading">
            <span>{projects.sectionLabel}</span>
            <h2>{projects.title}</h2>
          </div>
          <div className="card-grid">
            {projects.items.map((project) => (
              <article className="card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="pill-list">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <a className="card-link" href={project.link}>
                  {projects.ctaLabel}
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {currentYear} {footer.text}
        </p>
      </footer>
    </div>
  );
};

export default App;
