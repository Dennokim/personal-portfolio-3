import BlogContents from "./components/BlogContents";

export function renderBlog(data) {
  return data.map((item, index) => (
    <BlogContents
      key={index}
      image={item.image}
      alt={item.alt}
      imgDescription={item.imgDescription}
    />
  ));
}

