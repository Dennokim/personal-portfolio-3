// App.jsx
import "./index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Aboutphoto from "./components/Aboutphoto";
import Myskills from "./components/Myskills.jsx";
import Blogheader from "./components/Blogheader";
import BlogContents from "./components/BlogContents";
import Footer from "./components/Footer";
import { renderProjects } from "./ProjectRenderer"; // Import the renderProjects function
import projectData from "./projectData"; // Import projectData

export default function App() {
  const blogImg = [
    {
      image: "./computer-img.jpg",
      alt: "image1",
      imgDescription: "How to code efficiently",
    },
    {
      image: "./computer-img.jpg",
      alt: "image1",
      imgDescription: "How to code efficiently",
    },
    {
      image: "./computer-img.jpg",
      alt: "image1",
      imgDescription: "How to code efficiently",
    },
  ];

  const PhotoComponents = renderProjects(projectData);

  const BlogImgComponents = blogImg.map((data, index) => (
    <BlogContents
      key={index}
      image={data.image}
      alt={data.alt}
      imgDescription={data.imgDescription}
    />
  ));

  return (
    <>
      <Navbar />
      <Header />
      <Aboutphoto />
      <Myskills />
      {PhotoComponents}
      <Blogheader />
      <div className="flex flex-row gap-10 justify-center items-center">
        {BlogImgComponents}
      </div>
      <Footer />
    </>
  );
}
