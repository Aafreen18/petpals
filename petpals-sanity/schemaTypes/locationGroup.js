export default {
  name: 'locationGroup',
  type: 'document',
  title: 'Location Group',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'City / Region Title'
    },
    {
      name: 'items',
      type: 'array',
      title: 'Location Items',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              type: 'string',
              title: 'Description'
            },
            {
              name: 'map',
              type: 'url',
              title: 'Google Maps Link',
              description: 'Leave empty for timing entries'
            },
            {
              name: 'isTime',
              type: 'boolean',
              title: 'Is This a Timing Info?'
            }
          ]
        }
      ]
    }
  ]
}
