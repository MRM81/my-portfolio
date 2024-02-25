import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section className="page-container flex-center-row">
      <div className="about-container flex-center-column">
        <h1> About</h1>
        <p>
          Experienced boat builder since 2000, I've worked in medium sized
          production teams with roles including production manager, fitout and
          quality control on boats ranging from 18 foot kayaks to 77 foot luxury
          yachts. I pride myself on loyalty, commitment, and reliability and I'm
          currently poised for a career change after graduating with a Bachelor
          of IT from RMIT University with high distinctions. Proficient in Java,
          JavaScript, .NET, C#, React.js, and AWS integration. Passionate about
          web and software development, eager to leverage my skill set and ready
          to embark on new challenges, build further upon my skill set, and
          contribute towards innovative and meaningful projects.
        </p>
        <div className="github-links">
          <p>
            You can find my personal projects and contributions on GitHub below:
          </p>
          <a href="https://github.com/MRM81">
            <FaGithub />
          </a>
          <p>
            You can find my student projects and contributions on GitHub below:
          </p>
          <a href="https://github.com/s3778046">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
