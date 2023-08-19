import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { renderBlog } from "../BlogRenderer"; // Adjust the import path
import BlogData from "../BlogData"; // Import BlogData

export default function BlogPage() {
  const WorkPageBlogComponents = renderBlog(BlogData);

  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-center text-7xl font-medium mt-52 mb-52">Thoughts about programming</h1>
          <div className="flex flex-row gap-10 justify-center items-center">
            {WorkPageBlogComponents}
          </div>
          <div className="flex flex-row gap-10 justify-center items-center">
            {WorkPageBlogComponents}
          </div>
      <Footer />
    </>
  );
}
