import { Asset, Entry } from 'contentful';

// Tipo para eventos pasados
export interface PastEventFields {
  title: string;
  number: string;
  date: string;
  slug: string;
  images: Asset[];
  description?: string;
}

export type PastEventEntry = Entry<PastEventFields>;

// Tipo para perfiles del equipo
export interface TeamMemberFields {
  name: string;
  bio: string;
  image: Asset;
  order: number;
}

export type TeamMemberEntry = Entry<TeamMemberFields>;

// Tipo para contenido general
export interface GeneralContentFields {
  title: string;
  content: any; // Rich text
  slug: string;
}

export type GeneralContentEntry = Entry<GeneralContentFields>;

// Tipo para información de contacto
export interface ContactInfoFields {
  email: string;
  phone: string;
  instagram: string;
  vimeo?: string;
}

export type ContactInfoEntry = Entry<ContactInfoFields>;

