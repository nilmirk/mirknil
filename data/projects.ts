import { MirkUILogo } from "@/public/icons/icons";

export interface Project {
  name: string;
  thumb: string;
  id: string;
  icon: React.ComponentType | React.ReactNode;
}

export const projects: Project[] = [
  {
    name: 'Next.js components library',
    thumb: '/projects/ui-thumbnail.png',
    id: 'mirk-ui',
    icon: MirkUILogo
  }
];