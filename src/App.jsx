import "./index.css";
import Header from "./components/Header";
import Aboutphoto from "./components/Aboutphoto";
import Myskills from "./components/Myskills.jsx";
import Projects from "./components/Projects";
import Blogheader from "./components/Blogheader";
import BlogContents from "./components/BlogContents";
import Footer from "./components/Footer";

export default function App() {
  const photoData = [
    {
      title: "Nice to meet you",
      subTitles: "About me",
      imageSource: "./portrait-img.png",
      altText: "Person 1",
      backgroundColor: "#FDF0F2",
    },
    {
      title: "Hey you",
      subTitles: "Myself",
      imageSource: "./portrait-img.png",
      altText: "Person 2",
      backgroundColor: "#F8F7FF",
    },
    {
      title: "Hey you",
      subTitles: "Myself",
      imageSource: "./portrait-img.png",
      altText: "Person 2",
      backgroundColor: "#FDF0F2",
    },
    {
      title: "Hey you",
      subTitles: "Myself",
      imageSource: "./portrait-img.png",
      altText: "Person 2",
      backgroundColor: "#EFF5FD",
    },
  ];

  const blogImg = [
    {
      image: "./computer-img.jpg",
      alt: "image1",
      imgDescription: "How to code efficiently"
    },
    {
      image: "./computer-img.jpg",
      alt: "image1",
      imgDescription: "How to code efficiently"
    },
    {
      image: "./computer-img.jpg",
      alt: "image1",
      imgDescription: "How to code efficiently"
    }
  ]

  const PhotoComponents = photoData.map((data, index) => (
    <Projects
      key={index}
      title={data.title}
      subTitles={data.subTitles}
      imageSource={data.imageSource}
      altText={data.altText}
      backgroundColor={data.backgroundColor}
    />
  ));

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
      <Header />
      <Aboutphoto />
      <Myskills />
      {PhotoComponents}
      <Blogheader />
      <div className="flex flex-row gap-10 justify-center items-center">
        {BlogImgComponents}
      </div>
      <Footer/>
    </>
  );
}
