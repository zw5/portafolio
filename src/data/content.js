export const skills = ['JavaScript', 'React', 'TypeScript', 'CSS', 'Python', 'Node.js', 'Rust'];

export const content = {
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
      email: 'simon.velez@example.com',
      github: 'https://github.com/zw5',
      githubLabel: 'Follow me on GitHub',
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
    contact: {
      sectionLabel: 'Contacto',
      title: 'Ponte en contacto',
      email: 'simon.velez@example.com',
      github: 'https://github.com/zw5',
      githubLabel: 'Sigueme en GitHub',
    },
    footer: {
      text: 'Simon Velez Villegas. Todos los derechos reservados.',
    },
    toggleLabel: 'Cambiar a ingles',
  },
};
