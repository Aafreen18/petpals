export default {
  name: 'appointmentSection',
  title: 'Appointment Section',
  type: 'document',
  fields: [
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'featureImage',
      title: 'Feature Image (Right Side)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
