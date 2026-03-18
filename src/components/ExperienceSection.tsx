const experiences = [
  {
    role: "Senior Software Engineer",
    company: "TechCorp Inc.",
    period: "2022 – Present",
    bullets: [
      "Led a team of 5 engineers to rebuild the core platform, reducing page load time by 40%.",
      "Architected microservices migration serving 2M+ monthly active users.",
      "Introduced CI/CD pipelines that cut deployment time from 2 hours to 15 minutes.",
    ],
  },
  {
    role: "Software Engineer",
    company: "StartupXYZ",
    period: "2019 – 2022",
    bullets: [
      "Built real-time collaboration features using WebSockets and React.",
      "Designed and implemented RESTful APIs handling 10K+ requests per minute.",
      "Mentored 3 junior developers through code reviews and pair programming.",
    ],
  },
  {
    role: "Junior Developer",
    company: "Digital Agency Co.",
    period: "2017 – 2019",
    bullets: [
      "Developed responsive web applications for 20+ client projects.",
      "Reduced bug count by 30% by implementing automated testing workflows.",
    ],
  },
];

const ExperienceSection = () => (
  <section className="animate-fade-up animation-delay-200">
    <h2 className="text-xl font-bold text-primary mb-4 tracking-tight">Experience</h2>
    <div className="space-y-6">
      {experiences.map((exp) => (
        <div key={exp.company} className="space-y-1.5">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
            <h3 className="font-semibold text-foreground">{exp.role}</h3>
            <span className="text-sm text-muted-foreground shrink-0">{exp.period}</span>
          </div>
          <p className="text-sm font-medium text-accent">{exp.company}</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-text-body pl-1">
            {exp.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
