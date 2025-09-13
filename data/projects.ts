import { MirkUILogo } from "@/public/icons/icons";
import { StaticImageData } from "next/image";
import uiThubmnail from '@/public/projects/ui-thumbnail.png';

export interface Project {
  name: string;
  thumb: StaticImageData;
  href: string;
  icon: React.ComponentType | React.ReactNode;
}

export const projects: Project[] = [
  {
    name: 'Next.js components library',
    thumb: uiThubmnail,
    href: 'https://www.npmjs.com/package/mirk-ui?activeTab=readme',
    icon: MirkUILogo
  }
];