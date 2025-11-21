import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { content } from './data/content';

const App = () => {
  const [locale, setLocale] = useState('en');
  const current = content[locale];
  const { navLinks, hero, about, projects, footer, toggleLabel } = current;

  return (
    <div className="app">
      <Navbar
        navLinks={navLinks}
        locale={locale}
        setLocale={setLocale}
        toggleLabel={toggleLabel}
      />
      <main>
        <Hero hero={hero} />
        <About about={about} />
        <Projects projects={projects} />
        <Contact contact={current.contact} />
      </main>
      <Footer footer={footer} />
    </div>
  );
};

export default App;
