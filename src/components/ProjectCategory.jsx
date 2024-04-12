import { ProjectDetail } from "./ProjectDetail";

export function ProjectCategory({projects}){
  const limitedProjects = projects.slice(0, 4);
    return(
        <>
        {limitedProjects.map((project) => (
            <ProjectDetail
              key={project.title + project.description}
              title={project.title}
              description={project.description}
            />
          ))}
        </>
    )
}



