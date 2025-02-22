const SkillsSection = () => {
  const skills = [
    { name: "HTML", progress: 95 },
    { name: "CSS", progress: 90 },
    { name: "Bootstrap", progress: 85 },
    { name: "JavaScript", progress: 88 },
    { name: "TypeScript", progress: 80 },
    { name: "Laravel", progress: 75 },
    { name: ".NET (MVC)", progress: 70 },
    { name: "Next.js", progress: 85 },
    { name: "SQL", progress: 90 },
    { name: "MySQL", progress: 88 },
    { name: "React JS", progress: 92 },
    { name: "Tailwind CSS", progress: 90 },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between">
              <span className="text-lg font-medium">{skill.name}</span>
              <span className="text-lg font-medium">{skill.progress}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${skill.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
