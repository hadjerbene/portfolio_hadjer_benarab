
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
//import hero from "/composant/hero";


import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["À propos", "Compétences", "Projets", "Contact"];

const SKILLS = [
  {
    icon: "🌐",
    title: "Développement Web",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "Django", "React", "Bootstrap", "Tailwind CSS"],
  },
  {
    icon: "🖥️",
    title: "Développement Desktop",
    tags: ["C#", "SQL Server"],
  },
  {
    icon: "🤖",
    title: "Intelligence Artificielle",
    tags: ["Machine Learning", "Computer Vision"],
  },
];

const PROJECTS = [
  { title: "Gestion de projet", stack: "Django", category: "Web" },
  { title: "Gestion du personnel", stack: "PHP · MySQL", category: "Web" },
  { title: "Gestion des notes", stack: "Laravel", category: "Web" },
  { title: "Gestion de magasin", stack: "C# · SQL Server", category: "Desktop" },
  { title: "Dossiers étudiants", stack: "C# · SQL Server", category: "Desktop" },
];

const CATEGORY_STYLE = {
  Web: "bg-indigo-50 text-indigo-700",
  Desktop: "bg-green-50 text-green-700",
};

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function App() {
  
 const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Tous");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const filtered =
    activeFilter === "Tous"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
  
        <div className="font-sans bg-gray-50 text-gray-900 min-h-screen">
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap"
        rel="stylesheet"
      />

      <style>{`
        body { font-family: 'DM Sans', sans-serif; }
        .font-serif-display { font-family: 'DM Serif Display', serif; }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .avatar-float { animation: float 4s ease-in-out infinite; }
      `}</style>

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 h-[60px] transition-all duration-300 ${
  scrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-200" : "bg-transparent"
}`}>
  <span className="font-serif-display text-lg text-gray-900">HB</span>
  <div className="hidden md:flex gap-8">
    {NAV_LINKS.map((link) => (
      <button key={link} onClick={() => scrollTo(link.toLowerCase().replace("à ", "").replace("é", "e"))}
        className="bg-transparent border-none cursor-pointer text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 font-normal">
        {link}
      </button>
    ))}
  </div>
  {/* Burger mobile */}
  <div className="flex md:hidden gap-4">
    {NAV_LINKS.map((link) => (
      <button key={link} onClick={() => scrollTo(link.toLowerCase().replace("à ", "").replace("é", "e"))}
        className="bg-transparent border-none cursor-pointer text-xs text-gray-500 hover:text-gray-900 transition-colors duration-200 font-normal">
        {link.split(" ")[0]}
      </button>
    ))}
  </div>
</nav>

      {/* HERO */}
      <section className=" flex flex-col justify-center items-center text-center px-8 pt-20 pb-16 bg-gradient-to-br from-violet-50 via-gray-50 to-blue-50 relative overflow-hidden">
        {/* Decorative blobs
        <div className="absolute top-[15%] right-[10%] w-72 h-72 rounded-full bg-indigo-100/40 pointer-events-none" />
        <div className="absolute bottom-[20%] left-[8%] w-48 h-48 rounded-full bg-blue-100/40 pointer-events-none" />
 */}
        {/* Avatar */}
        <div className="avatar-float w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-400 flex items-center justify-center text-white text-2xl font-semibold mb-6 shadow-lg shadow-indigo-200">
          HB
        </div>

        <p className="text-xs tracking-widest uppercase text-indigo-500 font-medium mb-3">
          Portfolio
        </p>

       <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-gray-900 mb-4">
          Hadjer Benarab
        </h1>

        

        <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-sm px-4 py-1.5 rounded-full font-medium border border-indigo-200">
          ✦Ingénieure en Informatique spécialisée en développement Web, Desktop et Intelligence Artificielle
        </span>

        <div className="mt-12 flex flex-wrap gap-3 justify-center">
  
   {/*<a href="/cv-hadjer-benarab.pdf"
    download
    className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white no-underline px-7 py-2.5 text-sm rounded-full font-medium transition-all duration-200"
  >
    ⬇ Télécharger mon CV
  </a>*/}
  <button
    onClick={() => scrollTo("propos")}
    className="bg-transparent border border-gray-300 text-gray-500 hover:border-indigo-400 hover:text-indigo-500 transition-all duration-200 rounded-full px-7 py-2.5 text-sm cursor-pointer font-normal"
  >
    Découvrir ↓
  </button>
</div>
      </section>

      {/* ABOUT */}
      <section id="propos" className="py-24 px-8 max-w-3xl mx-auto text-center">
        <FadeIn>
          <p className="text-xs tracking-widest uppercase text-indigo-500 font-medium mb-4">
            À propos
          </p>
          <h2 className="font-serif-display text-4xl font-normal text-gray-900 mb-6 leading-tight">
            Construire des solutions
            <br />
            <em className="text-indigo-500 not-italic">intelligentes</em> et fiables
          </h2>
          <p className=" text-gray-500  leading-relaxed text-center">
            Ingénieure en informatique spécialisée en systèmes intelligents, je
            conçois des applications web, desktop et des solutions
            d'intelligence artificielle. Curieuse et rigoureuse, j'aime
            résoudre des problèmes complexes avec des technologies modernes.
          </p>
        </FadeIn>
      </section>

      {/* SKILLS */}
      <section id="competences" className="py-20 px-8 bg-violet-50">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-widest uppercase text-indigo-500 font-medium mb-4">
              Compétences
            </p>
            <h2 className="font-serif-display text-4xl font-normal text-gray-900 mb-10">
              Mon domaine d'expertise
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SKILLS.map((skill, i) => (
              <FadeIn key={skill.title} delay={i * 100}>
                <div className="bg-white rounded-2xl border border-indigo-100 p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100/60 transition-all duration-200 cursor-default">
                  <div className="text-3xl mb-3">{skill.icon}</div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">
                    {skill.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projets" className="py-24 px-8 max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-widest uppercase text-indigo-500 font-medium mb-4">
            Projets
          </p>
          <h2 className="font-serif-display text-4xl font-normal text-gray-900 mb-8">
            Réalisations récentes
          </h2>

          {/* Filters */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {["Tous", "Web", "Desktop"].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 border ${
                  activeFilter === f
                    ? "bg-indigo-500 text-white border-indigo-500"
                    : "bg-white text-gray-500 border-gray-200 hover:border-indigo-300 hover:text-indigo-500"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filtered.map((project, i) => (
            <FadeIn key={project.title} delay={i * 80}>
              <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-indigo-200 hover:shadow-md hover:shadow-indigo-50 transition-all duration-200 cursor-default">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_STYLE[project.category]}`}
                >
                  {project.category}
                </span>
                <h3 className="text-sm font-semibold text-gray-900 mt-3 mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400">{project.stack}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-8 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-xs tracking-widest uppercase text-indigo-400 font-medium mb-4">
              Contact
            </p>
           {/*  <h2 className="font-serif-display text-5xl font-normal text-white mb-4">
              Travaillons ensemble
            </h2>
            <p className="text-gray-400 text-sm mb-10">
              Disponible pour des opportunités de stage, freelance ou emploi.
            </p> */}

           <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href="mailto:hadjerbenarab@gmail.com"
                className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white no-underline px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200"
              >
                ✉ hadjerbenarab@gmail.com
              </a>
              <a
                href="tel:0675232387"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white no-underline px-6 py-3 rounded-full text-sm font-medium border border-white/20 transition-colors duration-200"
              >
                📞 0675 23 23 87
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER 
      <footer className="bg-gray-950 py-6 text-center">
        <p className="text-xs text-gray-600">
          © 2026 Hadjer Benarab — Ingénieure Informatique
        </p>
      </footer>*/}
    </div>

    
  )
}

export default App
