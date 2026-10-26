import "./App.css";
function App(){
  return(
    <div className="portfolio">
      
<a href="#main-content" className="skip-link">
  Skip to main content
</a>

      <nav className="navbar">
        <a href="#home"className="logo">
         SOHANI KHANDELWAL<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
           <a href="#projects">Projects</a>
           <a href="#contact">Contact</a>
          </div>
      </nav>
      <main id="home"className="hero">
        <span id="main-content"></span>
        <p className="greeting">HELLO,I'M</p>
        <h1>SOHANI KHANDELWAL<span>.</span></h1>
        <h2>Full Stack Developer</h2>
        <p className="intro">
            I build clean, responsive, and user-friendly
          web applications. I enjoy turning ideas into
          practical digital experiences.
        </p>
        <div className="hero-buttons">
          <a href="#projects"className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact"className="btn btn-secondary">
          Contact Me
          </a>
        </div>
      </main>
      <section id="about"className="about">
        <p className="section-label">GET TO KNOW ME</p>
        <h2>About Me</h2>
        <p className="about-text">
              I'm an aspiring Full Stack Developer who enjoys
    building websites and web applications.
    I'm learning modern frontend and backend technologies
    to turn ideas into useful digital products
        </p>
        <p className="about-text">
            My current focus is React, Python, FastAPI, and
    databases. I enjoy solving problems, learning new
    tools, and improving my development skills.
        </p>
      </section>
      <section id="projects"className="projects">
        <p className="section-label">WHAT I'VE BUILT</p>
      <h2>My Projects</h2>
      <p className="projects-intro">
          Here are some projects I've been working on
    while learning web development.
      </p>
      <div className="project-grid">
        <article className="project-card">
          <p className="project-number">PROJECT-01</p>
          <h3>Personal Portfolio</h3>
          <p>
            A responsive portfolio website built to
        showcase my skills, projects, and experience.
          </p>
          <div className="tech-stack">
            <span>React</span>
            <span>CSS</span>
            <span>vite</span>
          </div>
          <a href="https://github.com/SohaniKhandelwal06" target="_blank" rel="noopener noreferrer">
          View on Github
          </a>
        </article>
     

  <article className="project-card">
    <p className="project-number">PROJECT 02</p>
    <h3>Expense Tracker</h3>
    <p>
      An application to record daily expenses,
      track spending, and manage personal finances
      more effectively.
    </p>

    <div className="tech-stack">
      <span>React</span>
      <span>HTML</span>
      <span>CSS</span>
    </div>

    <a
      href="https://github.com/SohaniKhandelwal06"
      target="_blank"
      rel="noopener noreferrer"
    >
      View on GitHub ↗
    </a>
  </article>

 
  <article className="project-card">
    <p className="project-number">PROJECT 03</p>
    <h3>Stone Paper Scissors</h3>
    <p>
      A fun interactive game where a player competes
      against the computer using stone, paper, or
      scissors.
    </p>

    <div className="tech-stack">
      <span>JavaScript</span>
      <span>HTML</span>
      <span>CSS</span>
    </div>

    <a
      href="https://github.com/SohaniKhandelwal06"
      target="_blank"
      rel="noopener noreferrer"
    >
      View on GitHub ↗
    </a>
  </article>

 
  <article className="project-card">
    <p className="project-number">PROJECT 04</p>
    <h3>To-Do List</h3>
    <p>
      A simple task management application to add
      tasks, organize daily activities, and keep
      track of completed work.
    </p>

    <div className="tech-stack">
      <span>JavaScript</span>
      <span>HTML</span>
      <span>CSS</span>
    </div>

    <a
      href="https://github.com/SohaniKhandelwal06"
      target="_blank"
      rel="noopener noreferrer"
    >
      View on GitHub ↗
    </a>
  </article>
</div>
 </section>
      <section id="contact"className="contact">
        <p className="section-label">LET'S CONNECT</p>
        <h2> Contact Me</h2>
        <p className="contact-text">
            I'm always interested in learning, collaborating,
    and working on exciting projects.
    Feel free to get in touch!

        </p>
        <a href="mailto:khandelwalsohani06@gmail.com"className="btn btn-primary">
          Email Me
        </a>
        <a
    href="https://github.com/SohaniKhandelwal06"
    target="_blank"
    rel="noopener noreferrer"
    className="social-link"
  >Github </a>
      </section>
  
<footer className="footer">
  <p>
    © {new Date().getFullYear()} Sohani Khandelwal. All rights reserved.
  </p>

  <a
    href="https://github.com/SohaniKhandelwal06"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub ↗
  </a>
</footer>


    </div>
  )
}
export default App