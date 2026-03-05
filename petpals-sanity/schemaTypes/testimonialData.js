export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Testimonial Content',
      type: 'text',
    },
    {
      name: 'avatarType',
      title: 'Avatar Type',
      type: 'string',
      options: {
        list: [
          {title: 'Upload Image', value: 'upload'},
          {title: 'Image URL', value: 'url'},
        ],
        layout: 'radio',
      },
      initialValue: 'upload',
    },
    {
      name: 'avatarImage',
      title: 'Avatar Image (Upload)',
      type: 'image',
      hidden: ({parent}) => parent?.avatarType !== 'upload',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'avatarUrl',
      title: 'Avatar Image URL',
      type: 'url',
      hidden: ({parent}) => parent?.avatarType !== 'url',
    },
  ],
}
