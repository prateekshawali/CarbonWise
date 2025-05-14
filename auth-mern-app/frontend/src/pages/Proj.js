// 

import { useEffect, useState } from 'react';

// components
import ProjectDetails from './ProjectDetails';
import ProjectForm from './ProjectForm';

const Proj = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('http://localhost:8080/api/projects'); //or change it back to /api/projects if the whole localhost link doesnt work
      const json = await response.json();

      if (response.ok) {
        setProjects(json);
      }
    };

    fetchProjects();
  }, []);

//   return (
//     <div className="home">
//       <div className="project">
//         {project.length > 0 && project.map((projects) => (
//           <ProjectDetails key={projects._id} projects={projects} />
//         ))}
//       </div>
      
//     </div>
//   );
// };

return (
  <div className="home">
    <div className="projects">
      {projects.length > 0 ? (
        projects.map((projects) => (
          <ProjectDetails key={projects._id} projects={projects} />
        ))
      ) : (
        <p>No projects available.</p>
      )}
    </div>
    <ProjectForm />
  </div>
);
};

export default Proj;