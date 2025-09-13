import { MirkUILogo } from "@/public/icons/icons";

export interface Project {
  name: string;
  thumb: string;
  href: string;
  icon: React.ComponentType | React.ReactNode;
}

export const projects: Project[] = [
  {
    name: 'Next.js components library',
    thumb: '/projects/ui-thumbnail.png',
    href: 'https://www.npmjs.com/package/mirk-ui?activeTab=readme',
    icon: MirkUILogo
  }
];