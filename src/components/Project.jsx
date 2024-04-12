import { All } from "./All";
import { MyTitle } from "./MyTitle";
import { ProjectCategory } from "./ProjectCategory";

export function Project() {
  const projects = [
    {
      title: "TailwindCSS",
      description:
        "Rapidly build modern websites without ever leaving your HTML.",
    },
    {
      title: "Maizzle",
      description: "Framework for Rapid Email Prototyping",
    },
    {
      title: "Alpine.js",
      description: "Think of it like Tailwind for JavaScript.",
    },
    {
      title: "PostCSS",
      description: "A tool for transforming CSS with JavaScript",
    },
  ];

  let count=projects.length
  
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center pb-6">
          <MyTitle imagepath='/assets/img/icon-project.png' title='My Projects' />
          {count >2 && <All title='All Project' />}
        </div>
      </div>
      <ProjectCategory projects={projects} />
    </>
  );
}
