import { useState } from "react";
 
export default function Home() {
  return (
    <main className="flex gap-3 flex-col justify-between p-24 max-w-5xl mx-auto">
      <div>
        <h1 className="text-5xl">Allison Zhao</h1>
        <p>Developer | Student @ McMaster University</p>
      </div>
 
      <div>
        <h2 className="text-4xl">Socials</h2>
 
        <ul>
          <li>
            Twitter: {" "}
            <a
              className="text-blue-600 underline"
              href="https://twitter.com">
              @johndoe
            </a>
          </li>
          <li>
            Github: {" "}
            <a
              className="text-blue-600 underline"
              href="https://github.com">
              @johndoe
            </a>
          </li>
          <li>
            LinkedIn: {" "}
            <a
              className="text-blue-600 underline"
              href="https://linkedin.com">
              @johndoe
            </a>
          </li>
        </ul>
      </div>
 
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl">Projects</h2>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
          <div className="p-4 border rounded shadow-md">
            <h3 className="text-3xl text-bold">Project Alpha</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.</p>
          </div>
          <div className="p-4 border rounded shadow-md">
            <h3 className="text-3xl text-bold">Project Beta</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.</p>
          </div>
          <div className="p-4 border rounded shadow-md">
            <h3 className="text-3xl text-bold">Project Gamma</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.</p>
          </div>
          <div className="p-4 border rounded shadow-md">
            <h3 className="text-3xl text-bold">Project Delta</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
 
      {/* An example of how to use JS functions in JSX*/}
      The date is {new Date().toUTCString()}
 
    </main>
  )
}