import { Asset, Entry, EntrySkeletonType } from 'contentful';

// Tipo para eventos pasados
export interface PastEventFields extends EntrySkeletonType {
  fields: {
    title: string;
    number: string;
    date: string;
    slug: string;
    images: Asset[];
    description?: string;
  };
  contentTypeId: 'pastEvent';
}

export type PastEventEntry = Entry<PastEventFields, undefined, string>;

// Tipo para perfiles del equipo
export interface TeamMemberFields extends EntrySkeletonType {
  fields: {
    name: string;
    bio: string;
    image: Asset;
    order: number;
  };
  contentTypeId: 'teamMember';
}

export type TeamMemberEntry = Entry<TeamMemberFields, undefined, string>;

// Tipo para contenido general
export interface GeneralContentFields extends EntrySkeletonType {
  fields: {
    title: string;
    content: any; // Rich text
    slug: string;
  };
  contentTypeId: 'generalContent';
}

export type GeneralContentEntry = Entry<GeneralContentFields, undefined, string>;

// Tipo para información de contacto
export interface ContactInfoFields extends EntrySkeletonType {
  fields: {
    email: string;
    phone: string;
    instagram: string;
    vimeo?: string;
  };
  contentTypeId: 'contactInfo';
}

export type ContactInfoEntry = Entry<ContactInfoFields, undefined, string>;

