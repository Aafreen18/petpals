export default {
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "specialization",
      title: "Specialization",
      type: "string",
    },
    {
      name: "experience",
      title: "Experience",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "quote",
      title: "Quote",
      type: "string",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
    },
    {
      name: "social",
      title: "Social Links",
      type: "object",
      fields: [
        {
          name: "github",
          title: "GitHub",
          type: "url",
        },
        {
          name: "linkedin",
          title: "LinkedIn",
          type: "url",
        },
        {
          name: "instagram",
          title: "Instagram",
          type: "url",
        },
      ],
    },
  ],
};
