// WorkPage.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { renderProjects } from "../ProjectRenderer"; // Adjust the import path
import projectData from "../projectData"; // Import projectData

export default function WorkPage() {
  const WorkPagePhotoComponents = renderProjects(projectData);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-52 mb-52">
        <div className="container">
          <h1 className="text-center text-7xl font-medium">Selected work</h1>
        </div>
      </div>
      <div>{WorkPagePhotoComponents}</div>
      <Footer/>
    </>
  );
}

