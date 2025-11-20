import { createClient } from 'contentful';

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  console.warn('Contentful credentials not configured. Using mock data.');
}

export const contentfulClient = space && accessToken 
  ? createClient({
      space,
      accessToken,
    })
  : null;

// Función helper para obtener entries
export async function getEntries(contentType: string, query?: any) {
  if (!contentfulClient) {
    return { items: [] };
  }

  try {
    const entries = await contentfulClient.getEntries({
      content_type: contentType,
      ...query,
    });
    return entries;
  } catch (error) {
    console.error('Error fetching from Contentful:', error);
    return { items: [] };
  }
}

// Función helper para obtener un entry por ID
export async function getEntry(entryId: string) {
  if (!contentfulClient) {
    return null;
  }

  try {
    const entry = await contentfulClient.getEntry(entryId);
    return entry;
  } catch (error) {
    console.error('Error fetching entry from Contentful:', error);
    return null;
  }
}

