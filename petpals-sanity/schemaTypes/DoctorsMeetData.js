export default {
  name: 'doctorsMeet',
  title: 'Doctors Meet Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main heading text',
    },
    {
      name: 'paragraph',
      title: 'Paragraph',
      type: 'text',
      description: 'Supporting paragraph under the title',
    },
    {
      name: 'images',
      title: 'Carousel Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image Upload',
              type: 'image',
              options: {hotspot: true},
            },
            {
              name: 'imageUrl',
              title: 'Image URL (Optional)',
              type: 'url',
              description: 'If provided, this will override the uploaded image',
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alt text for accessibility and hover info',
            },
          ],
          preview: {
            select: {
              title: 'alt',
              media: 'image',
            },
          },
        },
      ],
    },
  ],
}
