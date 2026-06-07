/**
 * H+ Healthcare Platform Types
 */

export type Language = 'uz' | 'ru' | 'en';

export type PageId = 'home' | 'product' | 'solutions' | 'market' | 'traction' | 'pricing' | 'company' | 'investors';

export interface TeamMember {
  name: string;
  role: {
    uz: string;
    ru: string;
    en: string;
  };
  image: string;
  bio: {
    uz: string;
    ru: string;
    en: string;
  };
  linkedin?: string;
}

export interface RoadmapItem {
  quarter: string;
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  items: {
    uz: string[];
    ru: string[];
    en: string[];
  };
  status: 'completed' | 'current' | 'future';
}

export interface DemoRequest {
  fullName: string;
  email: string;
  organization: string;
  role: string;
  country: string;
  message?: string;
}
