import './App.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const App = () => {

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };


  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.send(
      "service_a7361ng",
      "template_is1jutn",
      formData,
      "-nHVoSf8phOTLjGfJ"
    )
    .then(() => {

      alert("Message sent successfully!");

      setFormData({
        name:"",
        email:"",
        message:""
      });

    })
    .catch((error)=>{

      console.log(error);
      alert("Failed to send message");

    });
  }


  return (
    <div className='main-page-cont'>

      <nav>
        <div class="logo">
          <img src="./portfolio-logo.png" alt="" />
        </div>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          {/* <li><a href="#experience">Experience</a></li> */}
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className='f-cont-parent'>
        <div className='f-cont'>
          <div className='f-cont-left'>
            <div className='about-sec'>
              <span className='badge'>"WELCOME TO MY UNIVERSE"</span>
              <h1>Crafting <span className='accent'>Digital<br />Masterpieces</span></h1>
              <p className='subtitle'>I'm <strong>Piyush Umale</strong>, a<span className='accent'> Full-Stack Developer</span>. dedicated to building high-performance, user-centric web applications.</p>
            </div>

            <div className='socials'>
              <a className='social-icon' href="https://github.com/Piyush-Umale" aria-label='GitHub'>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" /></svg>
              </a>
              <a className='social-icon' href="https://www.linkedin.com/in/piyush-umale-88a8a8344/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9K2VanJaQJubeLu5DPQtDA%3D%3D" aria-label='LinkedIn'>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" /></svg>
              </a>
              <a className='social-icon' href="https://x.com/umale_piyush" aria-label='Twitter'>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" /></svg>
              </a>
            </div>

            <div className='connect'>
              <a href="#contact" className='btn btn-primary'>LET"S COLLABORATE
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>
              </a>
              <div className='resume-wrapper'>
                <button href="#" className="btn btn-secondary" onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Piyush_Umale.pdf";
                  link.download = "Piyush_Umale.pdf";
                  link.click();
                }}>

                  GET RESUME
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>
                </button>
                <div className="resume-preview">
                  <img src="./Piyush_Umale.png"/>
                </div>
              </div>
            </div>
          </div>

          <div className='f-cont-right'>
            <div className='code-card'>
              <div className='code-card__header'>
                <div className='code-card__dots'>
                  <span className='dot dot--red'></span>
                  <span className='dot dot--dim1'></span>
                  <span className='dot dot--dim2'></span>
                </div>
                <div className='code-card__filename'>
                  <span className='file-dot'></span>portfolio.js</div>
              </div>
              <div className='code-card__body'>
                <div className='code-line'>
                  <ol>
                    <li><span className="kw">const</span><span className="var">developer</span> <span className="var">=</span> <span className="var">{'{'}</span></li>
                    <li>&nbsp;&nbsp;<span className='prop'>name:</span><span className='str'>'Piyush Umale',</span></li>
                    <li>&nbsp;&nbsp;<span className='prop'>focus:</span><span className='str'>'Fullstack Mastery',</span></li>
                    <li>&nbsp;&nbsp;<span className='prop'>skills:</span><span className='str'><span className='var'>{'['}</span>'javascript','MySQL','ReactJS','MongoDB','JAVA',</span></li>
                    <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='str'>'Springboot','NodeJS','Git','Github'<span className='var'>{'],'}</span></span></li>
                    <li>&nbsp;&nbsp;<span className='prop'>passionate:</span> <span className='bool'>true<span className='var'>,</span></span></li>
                    <li>&nbsp;&nbsp;<span className='prop'>motto:</span> <span className='str'>"Always learning. Always building."</span></li>
                    <li><span className='var'>{'};'}</span></li>
                    <div class="spacer"></div>
                    <div class="spacer"></div>
                    <li><span className='kw'>developer<span className='var'>.build{'()'}</span></span></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='about' id='about'>
        <div className='about__visual'>
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="1.2">
            <rect x="3" y="4" width="18" height="14" rx="2" />
            <path d="M3 8h18M8 4v4" />
            <path d="M7 12l2 2-2 2M12.5 16h4" />
          </svg>
        </div>
        <div>
          <span className='section-tag'>ABOUT ME</span>
          <h2 className='section-title'>Who <span className='accent'>I Am</span></h2>
          <p>I'm a fullstack developer who enjoys turning complex problems into clean,
            performant interfaces. My work sits at the intersection of solid
            architechture and thoughtful design - I care as much about how a button
            feels to click as I do about how the API behind it scales.
          </p>
          <p>
            Currently, I'm expanding my expertise through real-world projects using React.js, Node.js, Express.js, MongoDB, MySQL, and Java.
            I love learning new technologies, solving challenging problems, and continuously improving my development skills.
          </p>
          <div className='about-stats'>
            <div className='stat'>
              <div className='stat-number'>1+</div>
              <div className='stat-label'>Years of Building</div>
            </div>
            <div className='stat'>
              <div className='stat-number'>3+</div>
              <div className='stat-label'>Live Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/*Skills section*/}
      <section id="skills">
        <span class="section-tag">SKILLS</span>
        <h2 class="section-title">Tools I <span class="accent">Work With</span></h2>
        <div class="skills-grid">

          <div class="skill-card">
            <div class="skill-card__icon">
              <img
                src="https://cdn.simpleicons.org/react"
                alt="React"
                width="28"
                height="28"
              />
            </div>
            <h3>React.js</h3>
            <p>Building responsive, component-based web applications with reusable UI and modern React practices.</p>
          </div>

          <div class="skill-card">
            <div class="skill-card__icon">
              <img
                src="https://cdn.simpleicons.org/javascript"
                alt="JavaScript"
                width="28"
              />
            </div>
            <h3>JavaScript</h3>
            <p>Creating dynamic, interactive applications using ES6+, DOM manipulation, and asynchronous programming.</p>
          </div>

          <div class="skill-card">
            <div class="skill-card__icon">
              <img
                src="https://cdn.simpleicons.org/nodedotjs"
                alt="Node.js"
                width="28"
              />
            </div>
            <h3>Node.js</h3>
            <p>Developing scalable backend applications, REST APIs, and authentication systems with Express.js.</p>
          </div>

          <div class="skill-card">
            <div class="skill-card__icon">
              <img
                src="https://cdn.simpleicons.org/mongodb"
                alt="MongoDB"
                width="28"
              />
            </div>
            <h3>MongoDB</h3>
            <p>Designing NoSQL databases, handling CRUD operations, and managing data using Mongoose.</p>
          </div>

          <div class="skill-card">
            <div class="skill-card__icon">
              <img
                src="https://cdn.simpleicons.org/mysql"
                alt="MySQL"
                width="28"
              />
            </div>
            <h3>MySQL</h3>
            <p>Working with relational databases, SQL queries, joins, normalization, and efficient schema design.</p>
          </div>

          <div class="skill-card">
            <div class="skill-card__icon">
              <img
                src="https://cdn.simpleicons.org/openjdk"
                alt="Java"
                width="28"
              />
            </div>
            <h3>Java</h3>
            <p>Building object-oriented applications while applying core Java concepts and data structures.</p>
          </div>

          <div class="skill-card">
            <div className='skill-card-two-icons'>
              <div class="skill-card__icon">
                <img
                  src="https://cdn.simpleicons.org/html5"
                  alt="HTML5"
                  width="28"
                />

              </div>
              <div className='skill-card__icon'>
                <img
                  src="https://cdn.simpleicons.org/css"
                  alt="CSS3"
                  width="28"
                />
              </div>
            </div>
            <h3>HTML5 & CSS3</h3>
            <p>Creating semantic, accessible, and fully responsive user interfaces with modern layouts.</p>
          </div>

          <div class="skill-card">
            <div className='skill-card-two-icons'>
              <div class="skill-card__icon">
                <img
                  src="https://cdn.simpleicons.org/git"
                  alt="Git"
                  width="28"
                />
              </div>
              <div class="skill-card__icon">
                <img
                  src="https://cdn.simpleicons.org/github/ffffff"
                  alt="GitHub"
                  width="28"
                />
              </div>
            </div>
            <h3>Git & GitHub</h3>
            <p>Managing projects with version control, collaboration, branching, and efficient development workflows.</p>
          </div>

          <div class="skill-card">
            <div class="skill-card__icon">
              <img
                src="https://cdn.simpleicons.org/jsonwebtokens"
                alt="JWT"
                width="28"
              />
            </div>
            <h3>JWT Authentication</h3>
            <p>Implementing secure authentication, authorization, protected routes, and token-based user sessions.</p>
          </div>

          <div class="skill-card">
            <div class="skill-card__icon">
              <img
                src="https://api.iconify.design/tabler/api.svg?color=%23ff4d4d"
                alt="REST APIs"
                width="28"
              />
            </div>
            <h3>REST APIs</h3>
            <p>Building and consuming RESTful APIs for seamless communication between frontend and backend services.</p>
          </div>

        </div>
      </section>

      {/*Projects Section*/}

      <section id="projects">
        <span class="section-tag">PROJECTS</span>
        <h2 class="section-title">Things I've <span class="accent">Built</span></h2>

        <div class="projects-grid">

          <div class="project-card">
            <div class="project-card__thumb">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="1.2">
                <rect x="3" y="4" width="18" height="14" rx="2" />
                <path d="M3 9h18" />
                <path d="M8 13h8" />
                <path d="M8 16h5" />
              </svg>
            </div>

            <div class="project-card__body">
              <h3>CareerCompass</h3>

              <p>
                A full-stack job portal platform designed for freshers to discover career
                opportunities with secure authentication, advanced job search, filtering,
                and personalized user profiles.
              </p>

              <div class="tag-row">
                <span class="tag">React.js</span>
                <span class="tag">Node.js</span>
                <span class="tag">Express.js</span>
                <span class="tag">MongoDB</span>
                <span class="tag">JWT</span>
                <span class="tag">REST API</span>
              </div>

              <a class="project-link" href=" https://career-compass-seven-phi.vercel.app/">
                View Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>

          <div class="project-card">
            <div class="project-card__thumb">
              <img
                src="./devmetrics-preview.png"
                alt="DevMetrics Dashboard Preview"
              />
            </div>

            <div class="project-card__body">
              <h3>DevMetrics</h3>

              <p>
                A GitHub developer analytics dashboard that provides detailed insights into
                developer profiles, repositories, programming languages, and coding
                activity through interactive charts and real-time GitHub API integration.
              </p>

              <div class="tag-row">
                <span class="tag">React.js</span>
                <span class="tag">Node.js</span>
                <span class="tag">Express.js</span>
                <span class="tag">GitHub API</span>
                <span class="tag">Recharts</span>
                <span class="tag">Axios</span>
              </div>

              <a
                class="project-link"
                href="https://devmetrics-woad.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/*Contact Section*/}

      <section id="contact" class="contact">
        <div class="contact-info">
          <span class="section-tag">CONTACT</span>
          <h2 class="section-title">Let's <span class="accent">Talk</span></h2>
          <p>
            Have a project in mind or just want to say hi? I'm always open to
            discussing new opportunities and interesting problems to solve.
          </p>

          <div class="contact-detail">
            <span class="contact-detail__icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v16H4z" /></svg>
            </span>
            <div>
              <div class="contact-detail__label">Email</div>
              <div class="contact-detail__value">piyushumale333@gmail.com</div>
            </div>
          </div>

          <div class="contact-detail">
            <span class="contact-detail__icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7z" /></svg>
            </span>
            <div>
              <div class="contact-detail__label">Location</div>
              <div class="contact-detail__value">Available Worldwide (Remote)</div>
            </div>
          </div>
        </div>

        <form class="contact-form" onSubmit={sendEmail}>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Your name" required/>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required/>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." required></textarea>
          </div>
          <button type="submit" class="submit-btn">SEND MESSAGE</button>
        </form>
      </section>

      <footer>
        &copy; 2026 Piyush Umale. Always Learning, Always Building.
      </footer>

    </div>
  )
}


export default App;