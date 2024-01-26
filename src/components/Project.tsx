const Project = (props: any) => {
  return (
    <>
      <div className={`project-item ${props.project.elementName}`}>
        <a href={props.project.url} className="overlay flex-center-column">
          <h1>{props.project.title}</h1>
          <h4>{`${props.project.projectType} project`}</h4>

          {/* Frontend technologies */}
          <h5>Frontend Technology:</h5>
          <div className="flex-center-row">
            {props.project.frontend.map((frontend: any, index: any) => (
              <div key={frontend}>
                <p>{(index != 0  ? ', ' : '') + frontend}</p>
              </div>
            ))}
          </div>

          {/* Backend technologies */}

          {props.project.backend.length > 0 ? (
            <>
              <h5>Backend Technology:</h5>
              <div className="flex-center-row">
                {props.project.backend.map((backend: any, index: any) => (
                  <div key={backend}>
                    <p>{(index != 0  ? ', ' : '') + backend}</p>
                    
                  </div>
                ))}
              </div>
            </>
          ) : (
            <></>
          )}

          {/* Frontend Deployment */}
          <h5>Frontend Host:</h5>
          <div className="flex-center-row">
            <p>{props.project.frontendDeployed}</p>
          </div>

          {/* Backend Deploymnet */}

          {props.project.backendDeployed != "" ? (
            <>
              <h5>Backend Host:</h5>
              <div className="flex-center-row">
                <p>{props.project.backendDeployed}</p>
              </div>
            </>
          ) : (
            <></>
          )}
        </a>
      </div>
    </>
  );
};

export default Project;
