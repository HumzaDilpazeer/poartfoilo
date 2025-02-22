import { ReactTyped } from "react-typed";
import Hamza from "../../public/image/Hamza.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-blue-600 py-12">
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={Hamza}
          alt="Developer Illustration"
          className="w-full max-w-sm rounded-full shadow-md border"
        />
      </div>

      {/* Right Section - Text Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mt-10 md:mt-0">
        <h1 className="text-4xl font-extrabold text-white mb-5 text-center md:text-left">
          I Am a
        </h1>
        <p className="text-lg text-white font-bold mb-5 text-[30px] text-center md:text-left">
          Full Stack Web Developer
        </p>
        <div className="text-lg text-white font-medium text-[25px]">
          <span className="px-2">Expert</span>
          <ReactTyped
            strings={[
              "Html, Css and Java Script",
              "React js",
              "Asp .Net Core",
              "Laravel 11",
              "My Sql",
              "Sql Server",
              "jQuery",
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
