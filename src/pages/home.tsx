import BackToTop from "../components/BackToTop";
import Introduction from "../components/Introduction";
import ExperienceTable from "../components/ExperienceTable";
import ImageSlider from "../components/ImageSlider";
import RecentWork from "../components/RecentWork";



const Home = () => {
 

  return (
    <section className="page-container">
      {/* Back to top button */}
      <BackToTop />

      {/* Introduction on home page section */}
      <Introduction />

      {/* Creates a 400px high spacing */}
      <div className="divider-400"></div>

      {/* Main home content */}
      <div className="project-content">
        {/* Content display my experience */}
        <ExperienceTable />

        <div className="tech-icons"></div>

      <RecentWork/>

      {/* <ImageSlider /> */}
      </div>
    </section>
  );
};

export default Home;
