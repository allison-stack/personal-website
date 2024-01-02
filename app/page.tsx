import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-8 bg-gray-800 rounded-md text-white">
      <section className="mb-8 bg-gray-800 p-8 rounded-md">
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
            <a className="text-blue-600 underline" href="https://drive.google.com/file/d/1SNIaxqzx4_IyV1aI50Dgs5And0tW2Z3Y/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                View Resume
              </button>
            </a>
          </div>
        </div>
        <p>Developer | Student @ McMaster University</p>
      </section>

      <section className="mb-8 bg-gray-800 p-8 rounded-md">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p>
          Hi! Welcome to my simple and humble website. Here are some fun facts about me:
        </p>
        <ul className="list-disc pl-5">
          <li>I major in computer science</li>
          <li>Catch me at local restaurants/cafes trying out signature dishes/drinks during the day and stargazing at night</li>
          <li>I enjoy getting to know all sorts of people and hearing about things from their perspective</li>
          <li>I try to get involved in the McMaster community:
              <ul className="list-disc pl-5">
                  <li>I'm a logistics executive for Deltahacks -- McMaster's annual hackathon for change</li>
                  <li>And a fellow contributor to McMaster's GDSC open-source projects</li>
              </ul>
          </li>
        </ul>
      </section>

      <section className="mb-8 bg-gray-800 p-8 rounded-md">
        <h2 className="text-3xl font-bold">Experience</h2>
        <ul className="list-disc pl-5">
          <li>This previous summer I was an undergrad researcher @ IBM CAS where I worked on code optimization</li>
          <li>I also did some coding mentorship, teaching 100+ young children how to program in Elm</li>
          <li>I was a student ambassador for McMaster&apos;s computing and software department</li>
        </ul>
      </section>

      <section className="mb-8 bg-gray-800 p-8 rounded-md">
        <h2 className="text-3xl font-bold">Resume</h2>
        {/* Use embed tag to display PDF */}
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
