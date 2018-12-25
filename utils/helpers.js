export const refineContentfulPost = (post = {}) => {
  const sys = post.sys;
  const { heroImage } = post.fields;
  const image = heroImage.fields.file.url;

  return {
    ...post.fields,
    ...post.sys,
    image
  };
};
