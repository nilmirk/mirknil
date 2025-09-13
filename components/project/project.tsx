import { Text, Texting } from "mirk-ui";
import './project.scss';
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

export default function ProjectCard({name, thumb, icon, href}: Project) {

  const IconComponent = icon as React.ComponentType;
  const ProjectIcon = IconComponent ? <IconComponent /> : null;

  return (
    <Link target="_blank" href={href} className="project bg-blackHover flex-c gap-32 pad-32 rad-24 c-pointer">
      <div className="project-header flex-r a-center gap-16">
        {ProjectIcon}
        <Texting className="color-whiteHover" text={Text.Body4}>{name}</Texting>
      </div>
      <Image className="rad-16" src={thumb} alt={`${name} thumbnail`}/>
    </Link>
  );
}