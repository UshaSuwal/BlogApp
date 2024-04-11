import { ProjectDetail } from "./ProjectDetail";

export function ProjectCategory({projects}){
    return(
        <>
        {projects.map((project) => (
            <ProjectDetail
              title={project.title}
              description={project.description}
            />
          ))}
        </>
    )
}