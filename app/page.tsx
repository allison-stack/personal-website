"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  useEffect(() => {
    // Set the last updated date when the component mounts
    setLastUpdated(new Date().toUTCString());
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <nav className={`bg-gray-900 text-white p-4 fixed w-full top-0 z-10 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <button onClick={toggleTheme} className="text-2xl">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          <div className="space-x-4">
            <a href="#about" className={`hover:text-gray-300 ${isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'}`}>About</a>
            <a href="#work" className={`hover:text-gray-300 ${isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'}`}>Work</a>
            <a href="#contact" className={`hover:text-gray-300 ${isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'}`}>Contact</a>
          </div>
        </div>
      </nav>

      <main className="flex-1 p-8 pt-20">
        <section id="about" className={`mb-8 p-8 rounded-md ${isDarkMode ? 'bg-gray-1000' : 'bg-gray-200'}`}>
          <div className="flex justify-between items-center">
            <h1 className="text-5xl font-bold">👋 I&apos;m Allison Zhao</h1>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/allison-stack" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl text-gray-400 hover:text-gray-200" />
              </a>
              <a href="https://www.linkedin.com/in/allison-zhao-41a3a21b6/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-gray-400 hover:text-gray-200" />
              </a>
              <a href="mailto:allisonzhao.uni@gmail.com">
                <FaEnvelope className="text-2xl text-gray-400 hover:text-gray-200" />
              </a>
            </div>
          </div>
          <p>Developer | Researcher | Student @ McMaster University</p>
        </section>

      <section id="work" className={`mb-8 p-8 rounded-md ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <h2 className="text-3xl font-bold">Hello World!</h2>
          <ul className="list-disc pl-5">
            <li>Hey, I&apos;m Allison Zhao, a computer science student at McMaster University and an undergraduate researcher at IBM CAS.</li>
            <li>I specialize in Web Development, Machine Learning, Code Optimization, and Quantum Computing. Some technologies I&apos;m working with right now include: React Native, Haskell, C, and Qiskit (Python).</li>
            <li>Outside of academia and work I play badminton, and chess!</li>
          </ul>
      </section>

      <section id="experience" className={`mb-8 p-8 rounded-md flex items-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="mr-4">
          <h2 className="text-3xl font-bold">Experience</h2>
          <ul className="list-disc pl-5">
            <li>This previous summer I was an undergrad researcher @ IBM CAS where I worked on code optimization</li>
            <li>I also did some coding mentorship, teaching 100+ young children how to program in Elm</li>
            <li>I was a student ambassador for McMaster&apos;s computing and software department</li>
          </ul>
        </div>
      </section>

      <section id="resume" className={`mb-8 p-8 rounded-md ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <h2 className="text-3xl font-bold">Resume</h2>
        <embed src="/Allison_s_Resume_Jan2024.pdf" type="application/pdf" width="100%" height="600px" />
      </section>

      <section id="contact" className={`text-sm p-4 rounded-md mt-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <a href="https://github.com/allison-stack" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl text-gray-400 hover:text-gray-200" />
            </a>
            <a href="https://www.linkedin.com/in/allison-zhao-41a3a21b6/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-gray-400 hover:text-gray-200" />
            </a>
            <a href="mailto:allisonzhao.uni@gmail.com">
              <FaEnvelope className="text-2xl text-gray-400 hover:text-gray-200" />
            </a>
          </div>

          <div>
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>
    </main>
  </div>
  );
}
