export default {
  name: 'package',
  type: 'document',
  title: 'Packages',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'price',
      type: 'string',
      title: 'Price',
    },
    {
      name: 'backgroundColor',
      type: 'string',
      title: 'Background Color (Hex)',
    },
    {
      name: 'imageUrl',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'height',
      type: 'number',
      title: 'Card Height',
    },
    {
      name: 'buttonPaddingBottom',
      type: 'string',
      title: 'Button Padding Bottom',
    },
    {
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [{type: 'string'}],
    },
  ],
}
