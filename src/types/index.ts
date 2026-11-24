export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SkillGroup {
  category: string;
  items: readonly string[];
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  degree: string;
  bio: readonly string[];
  photo: string;
  skills: readonly SkillGroup[];
  socials: readonly SocialLink[];
  education: readonly EducationItem[];
  experience: readonly ExperienceItem[];
  training?: readonly TrainingItem[];
}

export interface CertificateItem {
  title: string;
  file: string;
}

export interface ExperienceItem {
  organization: string;
  location: string;
  role: string;
  period?: string;
  description?: readonly string[];
  details?: readonly ExperienceDetail[];
  certificates?: readonly CertificateItem[];
  tags?: readonly string[];
}
export interface ExperienceDetail {
  title: string;
  points: readonly string[];
}

export interface ExperienceItem {
  organization: string;
  location: string;
  role: string;
  period?: string;
  description?: readonly string[];
  details?: readonly ExperienceDetail[];
  tags?: readonly string[];
}
export interface EducationItem {
  institution: string;
  location: string;
  major: string;
  gpa: string;
  logo?: string;
}

export interface TrainingItem {
  title: string;
  provider: string;
  location?: string;
  period?: string;
  description?: readonly string[];
  details?: readonly ExperienceDetail[];
  certificates?: readonly CertificateItem[];
  tags?: readonly string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  galleryFolder?: string;
  images?: readonly string[];
  period?: string;
  tags?: readonly string[];
  featuresTitle?: string;
  features?: readonly ProjectFeature[];
  certificates?: readonly CertificateItem[];
  links?: readonly ProjectLink[];
}

export interface Profile {
  // ...field lain tetap
  training?: readonly TrainingItem[];
  projects: readonly ProjectItem[];
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  degree: string;
  photo: string;
  skills: readonly SkillGroup[];
  socials: readonly SocialLink[];
  education: readonly EducationItem[];
  experience: readonly ExperienceItem[];
  training?: readonly TrainingItem[];
}
