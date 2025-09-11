import { Text, Texting } from "mirk-ui";
import { Fragment } from "react";
import { projects } from "@/data/projects";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find(p => p.id === slug);
  
  return {
    title: project?.id,
    description: `Project ${project?.id}`,
  };
}

export default async function Page({ params } : PageProps) {
  const { slug } = await params;
  const project = projects.find(p => p.id === slug);

  if (!project) {
    return <Texting text={Text.Body1}>Project not found</Texting>;
  }

  const IconComponent = project.icon as React.ComponentType;
  const ProjectIcon = IconComponent ? <IconComponent /> : null;

  return (
    <Fragment>
      <Texting text={Text.Heading3}>{ProjectIcon}</Texting>
    </Fragment>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}