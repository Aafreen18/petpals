export const testimonialQuery = `*[_type == "testimonial"] | order(_createdAt asc) {
  _id,
  name,
  role,
  company,
  content,
  avatarType,
  avatarImage,
  avatarUrl,
  "avatar": coalesce(avatarImage.asset->url, avatarUrl)
}`;

export const getLocationsQuery = `
  *[_type == "locationGroup"] | order(_createdAt asc){
    title,
    items[]{
      text,
      map,
      isTime
    }
  }
`;

export const teamQuery = `*[_type == "teamMember"] | order(_createdAt asc) {
  _id,
  name,
  role,
  specialization,
  experience,
  quote,
  rating,
  "image": image.asset->url,
  social {
    github,
    linkedin,
    instagram
  }
}`;

export const faqQuery = `*[_type == "faq"] | order(_createdAt asc){
  _id,
  question,
  answer
}`;
