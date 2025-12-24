export type Project = {
  id: number;
  title: string;
  description: string;
  techStack : string;
  image?: string;
  github: string;
  live?: string;
} 

type SkillCategory = 'Languages' | 'Frameworks & Libraries' | 'Technologies & Tools';

export type Skill =  {
name: string;
category: SkillCategory;
}

export interface Experience {
  id: number
  role: string
  company: string
  team?: string
  location?: string
  period: string
  description: string
  highlights?: string[]
  image?: string
  techStack?: string
} 

export type Education = {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
} 

export type Blog = {
  id: number;
  minutesRead: number;
  thumbnail: string;
  title: string;
  excerpt: string;
  link: string;
} 

