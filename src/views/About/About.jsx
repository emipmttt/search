// información sobre el proyecto

import React from "react";
const About = () => {
  return (
    <>
      <h1 className="text-5xl font-black">About</h1>

      <h2 className="text-xl mt-5">Technologies</h2>

      <ul className="mt-3">
        <li>React</li>
        <li>React Hooks</li>
        <li>Redux</li>
      </ul>

      <h2 className="text-xl mt-5">Links</h2>
      <ul className="mt-3">
        <li>
          <a target="_blank" href="https://github.com/emipmttt/search">
            Repo
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/emipmttt">
            Github
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://es.stackoverflow.com/users/86010/emiliano-pamont?tab=profile"
          >
            Stack Overflow
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.behance.net/emipmt">
            Behance
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/emipmt/">
            Linkedin
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/emipmt/">
            Platzi
          </a>
        </li>
        <li className="mt-3">
          <a target="_blank" href="mailto:emipmttt@gmail.com">
            emipmttt@gmail.com
          </a>
        </li>
      </ul>
    </>
  );
};

export default About;
