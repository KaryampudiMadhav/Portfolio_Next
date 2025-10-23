import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    apiVersion: '2023-05-03',
    useCdn: process.env.NODE_ENV === 'production',
};

// Set up the client for fetching data in the getProps page function
export const sanityClient = createClient(config);

// Set up image URL builder
const imageBuilder = createImageUrlBuilder(config);

export const urlFor = (source: SanityImageSource) => {
    return imageBuilder.image(source);
};