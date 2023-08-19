// App.jsx
import "./index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Aboutphoto from "./components/Aboutphoto";
import Myskills from "./components/Myskills.jsx";
import Blogheader from "./components/Blogheader";
import Footer from "./components/Footer";
import { renderProjects } from "./ProjectRenderer"; // Import the renderProjects function
import projectData from "./projectData"; // Import projectData
import { renderBlog } from "./BlogRenderer";
import BlogData from "./BlogData";

export default function App() {
  

  const PhotoComponents = renderProjects(projectData);

  const BlogComponents = renderBlog(BlogData)

  return (
    <>
      <Navbar />
      <Header />
      <Aboutphoto />
      <Myskills />
      {PhotoComponents}
      <Blogheader />
      <div className="flex flex-row gap-10 justify-center items-center">
        {BlogComponents}
      </div>
      <Footer />
    </>
  );
}
