export default {
  name: 'membership',
  title: 'Membership',
  type: 'document',
  fields: [
    {
      name: 'time',
      title: 'Time Duration',
      type: 'string',
      description: 'E.g., "3 Monthly", "6 Monthly", "Annual"',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Formatted price, e.g., ₹1599',
    },
    {
      name: 'hoverColor',
      title: 'Hover Color Class',
      type: 'string',
      description: 'Tailwind class for hover bg, e.g., "hover:bg-[#d4a762]"',
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
