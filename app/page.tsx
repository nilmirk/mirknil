import SkillCard from "@/components/skill/skill";
import { Figma, Nextjs, Sass } from "@/public/icons/icons";
import { Text, Texting } from "mirk-ui";
import { Fragment, ReactNode } from "react";

export default function Home() {

  const skills = [
    {
      name: 'Figma',
      icon: <Figma />,
      children: 'It is a cloud-based design tool for creating, prototyping, and collaborating on user interface (UI) and user experience (UX) designs in real-time.',
      percent: 100
    },
    {
      name: 'Next.js',
      icon: <Nextjs />,
      children: 'It is a React framework for building fast, SEO-friendly web applications with server-side rendering and static site generation.',
      percent: 50
    },
    {
      name: 'Sass',
      icon: <Sass />,
      children: 'It is a CSS preprocessor that adds powerful features like variables, nesting, and mixins to write more maintainable and efficient stylesheets.',
      percent: 80
    }
  ];

  return (
    <Fragment>
      <Texting text={Text.Heading2}>Hello, my name is <span className="color-accentHover">Nilmirk</span></Texting>
      <section className="skills">
        <Texting text={Text.Heading3}>My skills</Texting>
        <div className="skills-container grid-ac-3 gap-40">
          {skills.map((i: {icon: ReactNode,
            name: string,
            children: ReactNode,
          percent: number}) => {
            return (
              <SkillCard key={i.name} name={i.name} icon={i.icon} percent={i.percent}>
                {i.children}
              </SkillCard>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
}
