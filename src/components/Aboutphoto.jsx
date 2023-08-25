import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function AboutPhoto() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const zoomStyles = {
    transform: isHovered ? "scale(0.95)" : "scale(1)", // Scale down on hover
    transition: "transform 0.3s ease-in-out", // Add a smooth transition
  };

  return (
    <Link to="/AboutPage">
      <div
        className="flex"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={zoomStyles}
      >
        <div className="container h-screen bg-gray-100 mr-24 ml-24 flex justify-between items-center">
          <div className="w-1/2">
            <h1 className="text-7xl font-medium pl-28">
              Nice to <br /> meet you
            </h1>
            <h1 className="text-4xl font-medium mt-80 pl-28">About me</h1>
          </div>
          <div className="w-1/2 p-8 flex justify-end items-center">
            <img
              src="./portrait-img.png"
              alt="Person"
              className="h-screen  max-w-full rounded-ful pr-20"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
