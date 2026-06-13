/**
 * H+ Healthcare Platform Types
 */

export type Language = 'uz' | 'ru' | 'en';

export type PageId = 'home' | 'product' | 'solutions' | 'market' | 'traction' | 'pricing' | 'company' | 'investors' | 'interview';

export type InterviewRole = 'administrator' | 'director' | 'doctor';

export interface InterviewQuestion {
  id: string;
  text: string;
  options?: string[];
  ratingRequired?: boolean;
  followUp?: string;
}

export interface InterviewAnswer {
  questionId: string;
  question: string;
  text: string;
  selectedOptions: string[];
  important: boolean;
  painLevel: number | null;
}

export interface ClinicInterviewRecord {
  id: string;
  date: string;
  role: InterviewRole;
  clinicName: string;
  city: string;
  interviewee: string;
  interviewer: string;
  dailyPatients: string;
  notes: string;
  answers: InterviewAnswer[];
  summary: {
    biggestPain: string;
    automationChoice: string;
    pilotInterest: string;
    conclusion: string;
  };
  createdAt: string;
}

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
