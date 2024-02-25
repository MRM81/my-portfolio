import { FaCheck } from "react-icons/fa";

const Project = (props: any) => {
  return (
    <>
      <div className="project-container">
        <div className="image">
          {/* Image */}

          <img src={props.project.image} alt="Project Image" />
          <a href={props.project.url} className="project-overlay">
            <h1>{props.project.title}</h1>

            {/***************************** Frontend technologies **********************************/}
            <div className="tech-data-1">
              <h5>Frontend Technology:</h5>
              <div className="flex-center-row">
                {props.project.frontend.map((frontend: any, index: any) => (
                  <div key={frontend}>
                    <p>{(index != 0 ? ", " : "") + frontend}</p>
                  </div>
                ))}
              </div>
            </div>

            {/*****************************  Backend technologies ***********************************/}
            {props.project.backend.length > 0 ? (
              <div className="tech-data-3">
                <h5>Backend Technology:</h5>
                <div className="flex-center-row">
                  {props.project.backend.map((backend: any, index: any) => (
                    <div key={backend}>
                      <p>{(index != 0 ? ", " : "") + backend}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <></>
            )}

            {/***************************  Frontend Deployment ***************************************/}
            <div className="tech-data-2">
              <h5>Frontend Host:</h5>
              <div className="flex-center-row">
                <p>{props.project.frontendDeployed}</p>
              </div>
            </div>

            {/************************* Backend Deployment ****************************************/}

            {props.project.backendDeployed != "" ? (
              <div className="tech-data-4">
                <h5>Backend Host:</h5>
                <div className="flex-center-row">
                  <p>{props.project.backendDeployed}</p>
                </div>
              </div>
            ) : (
              <></>
            )}


          </a>
        </div>

        <div className="content">
          <a href={props.project.url} className="overlay flex-center-column">
            <h1>{props.project.title}</h1>
          </a>
          <h4>{`${props.project.projectType} project`}</h4>
        </div>
      </div>
    </>
  );
};

export default Project;
