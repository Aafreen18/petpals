export default {
  name: 'heroSlide',
  title: 'Hero Slide',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Main title for the hero slide (use line breaks with shift + enter)',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Short description shown below the title',
    },
    {
      name: 'image',
      title: 'Image Upload',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload an image (used if no URL is provided)',
    },
    {
      name: 'imageUrl',
      title: 'Image URL',
      type: 'url',
      description: 'Optional: Enter an external image URL instead of uploading',
    },
  ],
}
