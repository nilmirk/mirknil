import { Text, Texting } from "mirk-ui";
import ProjectCard from "@/components/project/project";
import { projects, Project } from "@/data/projects";

export default function Page() {
  return (
    <section>
      <Texting text={Text.Heading3}>My projects</Texting>
      <div className="projects-container">
        {projects.map((i: Project) => {
          return (
            <ProjectCard key={i.name} href={i.href} icon={i.icon} thumb={i.thumb} name={i.name}/>
          );
        })}
      </div>
    </section>
  );
}