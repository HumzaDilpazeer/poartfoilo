const ExperienceSection = () => {
  const article =
    "During my one-year tenure at Pace Tech Islamabad as a full stack developer, I gained valuable experience in technology. Working in a fast-paced environment, I embraced opportunities to refine my skills in both front-end and back-end development. I contributed to a variety of software solutions, applying modern frameworks and best practices to deliver efficient, scalable applications. Although company policies restrict me from revealing detailed project specifics, I can confidently say that my work spanned numerous software products addressing diverse challenges. The collaborative culture at Pace Tech encouraged continuous learning and professional growth, empowering me to expand my expertise in full stack technologies. I tackled complex problems, innovating with established and emerging tools. This rewarding experience enhanced my technical acumen and deepened my commitment to excellence in software development. I anticipate new challenges to further refine my skills and drive innovation in future endeavors. I continuously strive for growth and mastery.";

  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto px-2">
        <h2 className="text-3xl font-bold mb-4">
          My Experience at Pace Tech Islamabad
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">{article}</p>
      </div>
    </section>
  );
};

export default ExperienceSection;
