import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section className="page-container flex-center-row">
      <div className="about-container flex-center-column">
        <h1> About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam
          neque quos autem animi aspernatur deleniti harum rem nulla, temporibus
          laborum reprehenderit natus commodi illum magni quisquam accusamus a
          odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          alias veritatis voluptatibus ex facilis blanditiis officiis sapiente
          dolores maxime quae iste modi doloremque vitae illo sit quod ipsa,
          ullam id. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Cupiditate facere quia neque ut reiciendis repellat, consequatur
          dolores aperiam officiis aut qui, ab id inventore repudiandae
          excepturi illum pariatur harum voluptatibus. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Debitis, accusamus similique harum,
          dolorem fuga optio magnam saepe explicabo recusandae totam iste rem.
          Nostrum ratione quos iusto at autem optio dignissimos. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Totam aspernatur veniam
          quisquam tenetur odio labore quos aliquam voluptas, ad saepe sed
          quaerat minus aperiam natus quibusdam tempora, quasi illum soluta?
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
