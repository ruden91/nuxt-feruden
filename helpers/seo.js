import meta from "static/meta.json";
export const setBlogSEO = ({
  title = "",
  description = "",
  image = "",
  slug = ""
}) => ({
  title: title,
  meta: [
    {
      hid: "description",
      name: "description",
      content: description
    },
    {
      hid: "og:title",
      property: "og:title",
      content: `FERuden | ${title}`
    },
    {
      hid: "og:description",
      property: "og:description",
      content: description
    },
    { hid: "og:type", property: "og:type", content: "article" },
    { hid: "og:locale", property: "og:locale", content: "ko" },
    {
      hid: "og:url",
      property: "og:url",
      content: `${meta.baseURL}/blog/${slug}`
    },
    {
      hid: "og:image",
      property: "og:image",
      content: image
    }
  ]
});
