import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-8 bg-gray-800 rounded-md text-white">
      <section className="mb-8 bg-gray-1000 p-8 rounded-md">
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

      <section className="mb-8 bg-gray-800 p-8 rounded-md">
        <h2 className="text-3xl font-bold">Hello World!</h2>
        <p>
          <ul className="list-disc pl-5">
            <li>Hey, I'm Allison Zhao, a computer science student at McMaster University and an undergraduate researcher at IBM CAS.</li>
            <li>I specialize in Web Development, Machine Learning, Code Optimization, and Quantum Computing. Some technologies I'm working with right now include: React Native, Haskell, C, and Qiskit (Python).</li>
            <li>Outside of academia and work I play badminton, and chess!</li>
          </ul>
        </p>

      </section>

      <section className="mb-8 bg-gray-800 p-8 rounded-md flex items-center">
        <div className="mr-4">
          <h2 className="text-3xl font-bold">Experience</h2>
          <ul className="list-disc pl-5">
            <li>This previous summer I was an undergrad researcher @ IBM CAS where I worked on code optimization</li>
            <li>I also did some coding mentorship, teaching 100+ young children how to program in Elm</li>
            <li>I was a student ambassador for McMaster&apos;s computing and software department</li>
          </ul>
        </div>

        <div className="flex-shrink-0">
          <img src="IBM_CAS_Poster.png" alt="Experience Image" className="w-50 h-60 object-cover rounded-md" />
        </div>
      </section>

      <section className="mb-8 bg-gray-800 p-8 rounded-md">
        <h2 className="text-3xl font-bold">Resume</h2>
        <embed src="/Allison_s_Resume_Jan2024.pdf" type="application/pdf" width="100%" height="600px" />
      </section>

      <section className="text-sm text-white bg-gray-800 p-4 rounded-md mt-8">
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

          {/* Additional Footer Content */}
          <div>
            Last updated: {new Date().toUTCString()}
          </div>
        </div>
      </section>
    </main>
  );
}
