import { useEffect, useState } from 'react'
import './App.css'
import AntigravityBackground from './components/AntigravityBackground'

function App() {
  const githubUrl = 'https://github.com/Adityaparida123'
  const linkedinUrl = 'https://www.linkedin.com/in/aditya-parida-1248072a1'
  const email = 'adityaparidaomm@gmail.com'
  const phone = '+91 9348817891'
  const resumeUrl = '/Resume.pdf'

  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const typingSource =
    'B.Tech Computer Science Student | Aspiring Software Developer'
  const [typed, setTyped] = useState('')
  const [skillsVisible, setSkillsVisible] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved)
      document.documentElement.setAttribute('data-theme', saved)
    } else {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    setTyped('')
    let i = 0
    const interval = window.setInterval(() => {
      i += 1
      setTyped(typingSource.slice(0, i))
      if (i >= typingSource.length) {
        window.clearInterval(interval)
      }
    }, 45)
    return () => window.clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const el = document.getElementById('skills')
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setSkillsVisible(true)
            io.disconnect()
            return
          }
        }
      },
      { threshold: 0.25 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="app">
      <AntigravityBackground />

      <header className="header">
        <div className="container headerInner">
          <a className="brand" href="#top">
            <span className="brandMark" aria-hidden="true" />
            <span className="brandText">Aditya Parida</span>
          </a>
          <div className="headerRight">
            <nav className="nav" aria-label="Primary">
              <a href="#top">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#education">Education</a>
              <a href="#contact" className="navCta">
                Contact
              </a>
            </nav>
            <button
              type="button"
              className="themeToggle"
              onClick={toggleTheme}
              aria-label="Toggle light and dark mode"
            >
              {theme === 'dark' ? '☾' : '☀'}
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="main">
        <section className="hero container" aria-label="Home">
          <div className="heroCard">
            <p className="kicker">Portfolio</p>
            <h1 className="heroTitle">
              Hi, I’m <span className="accent">Aditya Parida</span>
            </h1>
            <p className="heroSubtitle heroSubtitleTyping">
              <span>{typed}</span>
              <span className="cursor" aria-hidden="true">
                |
              </span>
            </p>
            <p className="heroSubtitle" style={{ marginTop: 10 }}>
              I build web applications, AI tools, and software projects.
              Currently learning full-stack development and exploring AI
              technologies.
            </p>
            <div className="heroActions">
              <a className="btn btnPrimary" href="#projects">
                View projects
              </a>
              <a className="btn btnGhost" href={resumeUrl} download>
                Download resume
              </a>
              <a className="btn btnGhost" href="#contact">
                Contact me
              </a>
            </div>
            <div className="heroMeta">
              <a className="pill" href={githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="pill" href={linkedinUrl} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="pill" href={`mailto:${email}`}>
                {email}
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section container">
          <h2 className="sectionTitle">About</h2>
          <div className="grid2">
            <div className="card">
              <p className="lead">
                Hi, I’m <span className="accent">Aditya Parida</span> — a
                Computer Science Engineering student with strong interest in
                software development, artificial intelligence, and data
                analysis.
              </p>
              <p className="muted">
                I enjoy problem solving and building technical projects. I’m
                currently looking for internship opportunities where I can learn
                fast and contribute to real products.
              </p>
            </div>
            <div className="card">
              <ul className="facts">
                <li>
                  <span className="factK">Location</span>
                  <span className="factV">Bhubaneswar, Odisha, India</span>
                </li>
                <li>
                  <span className="factK">Focus areas</span>
                  <span className="factV">Software Dev, AI, Data Analysis</span>
                </li>
                <li>
                  <span className="factK">Open to</span>
                  <span className="factV">Internships</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="terminal" className="section container">
          <h2 className="sectionTitle">Terminal</h2>
          <div className="card terminal">
            <div className="terminalTop">
              <span className="dot dotRed" aria-hidden="true" />
              <span className="dot dotYellow" aria-hidden="true" />
              <span className="dot dotGreen" aria-hidden="true" />
              <span className="terminalTitle">aditya@portfolio — zsh</span>
            </div>
            <div className="terminalBody">
              <p className="terminalLine">
                <span className="prompt">$</span> whoami
              </p>
              <p className="terminalOut">Aditya Parida</p>

              <p className="terminalLine">
                <span className="prompt">$</span> roles
              </p>
              <p className="terminalOut">
                B.Tech CSE Student • Aspiring Software Developer
              </p>

              <p className="terminalLine">
                <span className="prompt">$</span> skills
              </p>
              <p className="terminalOut">
                Python • Java • C/C++ • HTML/CSS/JS • Django • Git/GitHub
              </p>

              <p className="terminalLine">
                <span className="prompt">$</span> currently_learning
              </p>
              <p className="terminalOut">
                Full‑stack development • AI tools • Better problem solving
              </p>

              <p className="terminalLine">
                <span className="prompt">$</span> open_to
              </p>
              <p className="terminalOut">Internships</p>
            </div>
          </div>
        </section>

        <section id="projects" className="section container">
          <h2 className="sectionTitle">Projects</h2>
          <div className="grid3">
            {[
              {
                title: 'AI-Powered Financial Intelligence Platform',
                desc: 'Analyzes financial data using AI techniques to generate insights and predictions, with modules for data collection, processing, and visualization.',
                tags: ['AI', 'Data', 'Visualization'],
                liveUrl: '',
                codeUrl: '',
              },
              {
                title: 'Personal Portfolio Website',
                desc: 'A responsive portfolio website built with HTML, CSS, and JavaScript to showcase technical projects and skills with mobile-friendly layouts.',
                tags: ['HTML', 'CSS', 'JavaScript'],
                liveUrl: '',
                codeUrl: '',
              },
            ].map((p) => (
              <article key={p.title} className="card project">
                <div className="projectMedia" aria-hidden="true" />
                <h3 className="projectTitle">{p.title}</h3>
                <p className="muted">{p.desc}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="projectLinks">
                  {p.codeUrl ? (
                    <a className="btn btnGhost btnSm" href={p.codeUrl} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  ) : (
                    <span className="muted">Add GitHub link</span>
                  )}
                  {p.liveUrl ? (
                    <a className="btn btnPrimary btnSm" href={p.liveUrl} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  ) : (
                    <span className="muted">Add live link</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section container">
          <h2 className="sectionTitle">Skills</h2>
          <div className="grid2">
            <div className="card">
              <p className="lead">Core skills</p>
              <div className={`skillBars ${skillsVisible ? 'isVisible' : ''}`}>
                {[
                  { name: 'HTML/CSS', level: 85 },
                  { name: 'JavaScript', level: 78 },
                  { name: 'Python', level: 80 },
                  { name: 'Java', level: 72 },
                  { name: 'Django', level: 65 },
                  { name: 'Data Structures', level: 75 },
                ].map((s) => (
                  <div key={s.name} className="skillRow">
                    <div className="skillTop">
                      <span className="skillName">{s.name}</span>
                      <span className="skillPct">{s.level}%</span>
                    </div>
                    <div className="skillTrack" aria-hidden="true">
                      <div className="skillFill" style={{ ['--pct' as never]: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <p className="lead">Tools & concepts</p>
              <div className="chips" style={{ marginTop: 10 }}>
                {[
                  'C/C++',
                  'Git',
                  'GitHub',
                  'OOP',
                  'Algorithms',
                  'Database Systems',
                  'Operating Systems',
                  'Linux',
                  'VS Code',
                  'Excel/PowerPoint',
                ].map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="github" className="section container">
          <h2 className="sectionTitle">GitHub</h2>
          <div className="grid2">
            <div className="card">
              <p className="lead">GitHub stats</p>
              <p className="muted">
                These update automatically from your GitHub profile.
              </p>
              <div className="githubImgs" style={{ marginTop: 12 }}>
                <img
                  className="githubImg"
                  alt="GitHub stats"
                  loading="lazy"
                  src={`https://github-readme-stats.vercel.app/api?username=adityaparida123&show_icons=true&theme=transparent&title_color=ff1f1f&text_color=ffffff&icon_color=ff1f1f`}
                />
              </div>
            </div>
            <div className="card">
              <p className="lead">Contribution graph</p>
              <p className="muted">Shows your recent coding activity.</p>
              <div className="githubImgs" style={{ marginTop: 12 }}>
                <img
                  className="githubImg"
                  alt="GitHub contribution graph"
                  loading="lazy"
                  src={`https://ghchart.rshah.org/ff1f1f/adityaparida123`}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section container">
          <h2 className="sectionTitle">Education</h2>
          <div className="grid2">
            <div className="card">
              <p className="lead">
                Bachelor of Technology (B.Tech), Computer Science Engineering
              </p>
              <p className="muted">Expected Graduation: 2028</p>
              <p className="muted">
                University: <span className="accent">Add your university name</span>
              </p>
            </div>
            <div className="card">
              <p className="lead">Relevant coursework</p>
              <div className="chips" style={{ marginTop: 10 }}>
                {[
                  'Data Structures',
                  'Algorithms',
                  'Database Systems',
                  'Operating Systems',
                  'Web Development',
                ].map((c) => (
                  <span key={c} className="chip">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section container">
          <h2 className="sectionTitle">Contact</h2>
          <div className="grid2">
            <div className="card">
              <p className="lead">
                Want to work together? Send me a message.
              </p>
              <p className="muted">
                Use the email link, or replace this with a real form later.
              </p>
              <a className="btn btnPrimary" href={`mailto:${email}`}>
                Email me
              </a>
            </div>
            <div className="card">
              <ul className="facts">
                <li>
                  <span className="factK">Email</span>
                  <span className="factV">{email}</span>
                </li>
                <li>
                  <span className="factK">LinkedIn</span>
                  <span className="factV">{linkedinUrl.replace('https://', '')}</span>
                </li>
                <li>
                  <span className="factK">GitHub</span>
                  <span className="factV">{githubUrl.replace('https://', '')}</span>
                </li>
                <li>
                  <span className="factK">Phone</span>
                  <span className="factV">{phone}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footerInner">
            <span className="muted">
              © {new Date().getFullYear()} Aditya Parida
            </span>
            <a className="link" href="#top">
              Back to top
            </a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
