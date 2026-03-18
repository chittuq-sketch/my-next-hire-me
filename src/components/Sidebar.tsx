const skills = [
  "TypeScript", "React", "Node.js", "Python", "PostgreSQL",
  "AWS", "Docker", "Kubernetes", "GraphQL", "CI/CD",
];

const education = [
  {
    degree: "B.S. Computer Science",
    school: "University of California, Berkeley",
    year: "2017",
  },
];

const Sidebar = () => (
  <aside className="space-y-8 animate-fade-up animation-delay-300">
    {/* Skills */}
    <div>
      <h2 className="text-xl font-bold text-primary mb-3 tracking-tight">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="px-3 py-1 text-sm font-medium rounded-full bg-surface text-text-body"
          >
            {s}
          </span>
        ))}
      </div>
    </div>

    {/* Education */}
    <div>
      <h2 className="text-xl font-bold text-primary mb-3 tracking-tight">Education</h2>
      {education.map((e) => (
        <div key={e.school} className="space-y-0.5">
          <p className="font-semibold text-foreground">{e.degree}</p>
          <p className="text-sm text-text-body">{e.school}</p>
          <p className="text-sm text-muted-foreground">{e.year}</p>
        </div>
      ))}
    </div>
  </aside>
);

export default Sidebar;
