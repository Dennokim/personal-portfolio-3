// ProjectRenderer.jsx
import Projects from "./components/Projects"; // Import the Projects component

export function renderProjects(data) {
  return data.map((item, index) => (
    <Projects
      key={index}
      title={item.title}
      subTitles={item.subTitles}
      imageSource={item.imageSource}
      altText={item.altText}
      backgroundColor={item.backgroundColor}
    />
  ));
}