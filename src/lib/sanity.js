import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Initialize and export the client
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2025-07-15',
});

// Initialize the image builder
const builder = imageUrlBuilder(client);

// Export the urlFor function
export const urlFor = (source) => {
  return builder.image(source)
    .auto('format')
    .fit('clip');
};

