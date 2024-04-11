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

  
  return (
    <>
      <div class="container mx-auto">
        <div class="flex items-center pb-6">
          <img src="/assets/img/icon-project.png" alt="icon story" />
          <h3 class="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
            My Projects
          </h3>
        </div>
      </div>

      <ProjectCategory projects={projects} />
    </>
  );
}
