import './App.css'
import AntigravityBackground from './components/AntigravityBackground'

function App() {
  const githubUrl = 'https://github.com/'
  const linkedinUrl = 'https://www.linkedin.com/'
  const email = 'adityaparidaomm@gmail.com'
  const phone = '+91 9348817891'
  const resumeUrl = '/Resume.pdf'

  return (
    <div className="app">
      <AntigravityBackground />

      <header className="header">
        <div className="container headerInner">
          <a className="brand" href="#top">
            <span className="brandMark" aria-hidden="true" />
            <span className="brandText">Aditya Parida</span>
          </a>
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
        </div>
      </header>

      <main id="top" className="main">
        <section className="hero container" aria-label="Home">
          <div className="heroCard">
            <p className="kicker">Portfolio</p>
            <h1 className="heroTitle">
              Hi, I’m <span className="accent">Aditya Parida</span>
            </h1>
            <p className="heroSubtitle">
              B.Tech Computer Science Student | Aspiring Software Developer
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

        <section id="projects" className="section container">
          <h2 className="sectionTitle">Projects</h2>
          <div className="grid3">
            {[
              {
                title: 'AI-Powered Financial Intelligence Platform',
                desc: 'Analyzes financial data using AI techniques to generate insights and predictions, with modules for data collection, processing, and visualization.',
                tags: ['AI', 'Data', 'Visualization'],
              },
              {
                title: 'Personal Portfolio Website',
                desc: 'A responsive portfolio website built with HTML, CSS, and JavaScript to showcase technical projects and skills with mobile-friendly layouts.',
                tags: ['HTML', 'CSS', 'JavaScript'],
              },
            ].map((p) => (
              <article key={p.title} className="card project">
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
                  <span className="muted">Add live/code links</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section container">
          <h2 className="sectionTitle">Skills</h2>
          <div className="card">
            <div className="chips">
              {[
                'Python',
                'Java',
                'C/C++',
                'JavaScript',
                'HTML',
                'CSS',
                'Git',
                'GitHub',
                'Django',
                'Data Structures',
                'OOP',
                'Algorithms',
                'Database Systems',
                'Operating Systems',
                'Linux',
                'VS Code',
                'Microsoft Excel',
              ].map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
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
