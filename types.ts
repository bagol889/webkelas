
export interface Person {
  id: string;
  name: string;
  role: string;
  photo: string;
  motto?: string;
  socials?: {
    instagram?: string;
    github?: string;
  };
}

export interface ClassInfo {
  name: string;
  description: string;
  schoolName: string;
  schoolLogo: string;
  generation: string;
}
