import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import "./App.css";
import profilePic from "./jyoti.jpeg"; // Import your local image

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Jyoti Yadav</h1>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
          <button className="theme-toggle" onClick={() => setDark(!dark)}>
            {dark ? <Sun /> : <Moon />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <img
            src={profilePic}
            alt="profile"
            className="profile-pic"
          />
          <h2>
            Hi, I'm <span className="gradient-text">Jyoti 👋</span>
          </h2>
          <p>BCA Student • Software Developer</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="/resume.pdf" className="btn outline" download>
              Download Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I’m a Bachelor in Computer Applications (BCA) student passionate about
          software development, AI, and web technologies. I love solving
          real-world problems through clean and creative code.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section alt">
        <h2>Skills</h2>
        <div className="grid">
          {["Python", "Java", "C", "Flask", "React", "SQL", "Linux", "Git"].map(
            (skill) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="card"
                key={skill}
              >
                {skill}
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="grid">
          <motion.div whileHover={{ scale: 1.02 }} className="card glass">
            <h3>Signature Verification System</h3>
            <p>
              Flask web app using CNN & Siamese networks to verify handwritten
              signatures with an admin dashboard.
            </p>
            <a href="https://github.com/jyotiYadav134/SignatureVerification">
              View on GitHub
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="card glass">
            <h3>College Event Management System</h3>
            <p>
              College Event Management System – A PHP & MySQL web app for managing
              college events with admin controls, user registration, and event
              tracking.
            </p>
            <a href="https://github.com/jyotiYadav134/college_event">
              View on GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="section alt">
        <h2>Achievements</h2>
        <ul>
          <li>Completed CNN-based Signature Verification Project</li>
          <li>Certification in Python</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Let's collaborate or chat about new opportunities!</p>
        <div className="socials">
          <a href="mailto:jy984134@gmail.com"><Mail /></a>
          <a href="https://linkedin.com/in/yourlinkedin"><Linkedin /></a>
          <a href="https://github.com/jyotiYadav134"><Github /></a>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Jyoti Yadav. All rights reserved.
      </footer>
    </div>
  );
}
