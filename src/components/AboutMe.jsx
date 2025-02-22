import img1 from "../../public/image/Hamza1.jpg";

const skills = [
  {
    name: "JavaScript",
    description:
      "A versatile programming language essential for creating dynamic and interactive web applications. It is the backbone of modern web development.",
  },
  {
    name: "React",
    description:
      "A powerful front-end library that helps in building component-based user interfaces with ease and efficiency. It excels in creating responsive web apps.",
  },
  {
    name: "Node.js",
    description:
      "A runtime environment that allows you to execute JavaScript on the server side. It is ideal for building scalable and high-performance network applications.",
  },
  {
    name: ".NET",
    description:
      "A robust framework for developing enterprise-level applications. It supports multiple languages and offers a wide range of libraries for efficient development.",
  },
  {
    name: "Laravel",
    description:
      "A modern PHP framework designed for web application development. Laravel provides elegant syntax and powerful features that simplify complex tasks.",
  },
  {
    name: "Database Management",
    description:
      "Involves designing, implementing, and maintaining databases to ensure data integrity, security, and optimal performance for web applications.",
  },
];

const AboutMe = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-8 bg-gray-100">
      {/* Left Section: Image */}
      <div className="md:w-1/2 p-4">
        <img
          src={img1}
          alt="Profile"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      {/* Right Section: Content */}
      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <h3 className="text-xl font-semibold mb-2">
          Enthusiastic Full Stack Developer
        </h3>
        <p className="mb-4">
          Skilled in creating dynamic web apps. Experienced in JavaScript,
          React, Node.js, .NET, Laravel, and database management.
        </p>
        <div>
          <h4 className="text-lg font-semibold mb-2">Skills Details</h4>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <h5 className="text-lg font-bold">{skill.name}</h5>
                <p className="ml-4 text-gray-700">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
