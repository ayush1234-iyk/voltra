import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";

// ===== Import Gallery Images =====
import gallery1 from "./assets/gallery1.jpg";
import gallery2 from "./assets/gallery2.jpg";
import gallery3 from "./assets/gallery3.jpg";

const App = () => {
  const formLink = "https://forms.gle/hdayZQwvbFeSNi1p6";
  const eventDate = new Date("2026-03-18T08:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">VOLTRA 2.0</h2>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("prizes")}>Prizes</button>
          <button onClick={() => scrollTo("rules")}>Rules</button>
          <button onClick={() => scrollTo("gallery")}>Gallery</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </div>
      </nav>

      {/* HERO VIDEO */}
      <section className="hero">
        <div className="hero-bg">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/volleyball.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>

        <motion.img
          src="/volleyball.png"
          className="floating-ball"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <div className="hero-content">
          <motion.h1
            className="voltra-title"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            VOLTRA 2.0
          </motion.h1>
          <motion.p
            className="league-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Volleyball League of Rising Aces 2026
          </motion.p>
          <p className="event-info">📅 18 March | 📍 College Volleyball Court</p>

          <div className="countdown">
            <div>{timeLeft.days}d</div>
            <div>{timeLeft.hours}h</div>
            <div>{timeLeft.minutes}m</div>
            <div>{timeLeft.seconds}s</div>
          </div>

          <a href={formLink} target="_blank" rel="noopener noreferrer">
            <button className="register-btn">Register Player</button>
          </a>
        </div>
      </section>

      {/* VIDEO BACKGROUND FOR SECTIONS */}
      <div className="video-background-container">
        <video autoPlay loop muted className="background-video">
          <source src="/volleyball_action.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>

        {/* ABOUT */}
        <section id="about" className="section">
          <h2>About VOLTRA</h2>
          <p className="about-text">
            VOLTRA is our annual volleyball tournament organized by the college
            sports club. Teams from different departments compete in knockout
            matches to win the championship.
          </p>
        </section>

        {/* PRIZES */}
        <section id="prizes" className="section">
          <h2>🏆 Prize Pool</h2>
          <ul className="prize-text">
            <li className="prizes-text">Winner – Trophy + Gold medal</li>
            <li className="prizes-text">Runner-up – Trophy + Silver medal</li>
            <li className="prizes-text">Player of the Tournament – Trophy</li>
            <li className="prizes-text">Player of the Match – Trophy</li>
            <li className="prizes-text">Emerging Player – Trophy</li>
          </ul>
        </section>

        {/* RULES */}
        <section id="rules" className="section">
          <h2>📜 Rules</h2>
          <ul className="rules-text">
            <li>6 players per team</li>
            <li>Maximum players per captain is 8</li>
            <li>Knockout format</li>
            <li>Report 30 minutes before match</li>
            <li>Organizer/Referee decision will be final</li>
            <li>
              Official FIVB Rules of Volleyball:{" "}
              <a
                href="https://www.fivb.com/-/media/fivb/media/2023/volleyball_rules2023.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                PDF Link
              </a>
            </li>
          </ul>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="section">
          <h2>Previous VOLTRA</h2>
          <div className="gallery">
            <img src={gallery1} alt="voltra1" />
            <img src={gallery2} alt="voltra2" />
            <img src={gallery3} alt="voltra3" />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <h2>Contact / Coordinators</h2>
          <ul className="contact-text">
            <li>Dillu Chaubey :- 7004842811</li>
            <li>Anshu Kumar :- 9142214623</li>
            <li>Ayush Amrit :- 7488347149</li>
          </ul>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 VOLTRA 2.0 | All Rights Reserved</p>
        <a
          href="https://www.instagram.com/gecm_volley"
          target="_blank"
          rel="noopener noreferrer"
          className="insta-link"
        >
          📸 Follow us on Instagram
        </a>
      </footer>
    </div>
  );
};

export default App;