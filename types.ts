export enum Language {
  KR = 'KR',
  EN = 'EN'
}

export interface NavContent {
  story: string;
  philosophy: string;
  products: string;
  contact: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  cta: string;
}

export interface StoryContent {
  title: string;
  description: string[];
  subDescription: string;
  quote: string;
}

export interface PhilosophyItem {
  icon: string;
  title: string;
  desc: string;
}

export interface IngredientContent {
  title: string;
  description: string;
  features: string[];
}

export interface Product {
  id: string;
  name: string;
  slogan: string;
  features: string[];
  howToUse: string;
  steps?: string[];
  image: string;
  tags: string[];
}

export interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

export interface AppContent {
  nav: NavContent;
  hero: HeroContent;
  story: StoryContent;
  philosophy: {
    title: string;
    items: PhilosophyItem[];
  };
  ingredient: IngredientContent;
  process: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  products: {
    title: string;
    subtitle: string;
    items: Product[];
  };
  footer: {
    copyright: string;
    tagline: string;
  };
}