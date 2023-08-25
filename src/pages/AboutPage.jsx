import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <div className="bg-[#111111] text-white p-8 pt-96">
        {/* Apply padding to the container */}
        <Navbar />
        <div className="h-screen flex flex-col justify-center items-center pb-60">
          <div className="text-left text-9xl font-medium mb-4 leading-relaxed">
            Hello
          </div>
          <div className="text-left text-2xl px-56 my-4 leading-relaxed">
            I am a results-oriented software engineer with a robust foundation
            in full-stack development, stemming from my successful completion
            of the FreeCodeCamp program. My internships with industry leaders
            like JP Morgan and Chase, Y-Combinator, Commonwealth Bank, and
            Skyscanner have given me a diverse skill set and a deep
            appreciation for teamwork and innovation.
          </div>
          <div className="text-left text-2xl px-56 my-4 leading-relaxed">
            My strength lies in collaborating effectively within
            cross-functional teams, delivering clean, efficient, and
            maintainable code, and a strong commitment to continuous learning.
            Proficient in JavaScript, Python, React, Node.js, and SQL, I bring
            adaptable expertise and a passion for solving complex problems to
            every project. I am eager to contribute my skills and grow as a
            software engineer in a dynamic and innovative environment.
          </div>
          <div className="text-left text-2xl px-56 my-4 leading-relaxed">
            Outside of my work, I am an avid fan of deep sci-fi movies, with
            Interstellar ranking as my all-time favorite. I also have a penchant
            for good music and cherish quality time spent with my family.
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
