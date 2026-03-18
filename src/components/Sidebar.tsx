const skills = [
  "Agile & Waterfall PM",
  "Budgeting & Cost Control",
  "Stakeholder Management",
  "Vendor Management",
  "IT Infrastructure",
  "Risk & Compliance",
  "Process Optimization",
  "Banking & Financial Services",
  "Change Management",
  "SAFe Agile",
  "PRINCE2",
];

const education = [
  {
    degree: "Bachelor of Engineering",
    school: "",
    year: "",
  },
];

const certifications = [
  "SAFe Agile Certification",
  "PRINCE2 & Agile Methodologies",
  "Progressive Elaboration Certification",
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

    {/* Certifications */}
    <div>
      <h2 className="text-xl font-bold text-primary mb-3 tracking-tight">Certifications</h2>
      <ul className="space-y-1.5 text-sm text-text-body">
        {certifications.map((c) => (
          <li key={c}>• {c}</li>
        ))}
      </ul>
    </div>

    {/* Education */}
    <div>
      <h2 className="text-xl font-bold text-primary mb-3 tracking-tight">Education</h2>
      {education.map((e) => (
        <div key={e.degree} className="space-y-0.5">
          <p className="font-semibold text-foreground">{e.degree}</p>
          {e.school && <p className="text-sm text-text-body">{e.school}</p>}
          {e.year && <p className="text-sm text-muted-foreground">{e.year}</p>}
        </div>
      ))}
    </div>

    {/* Interests */}
    <div>
      <h2 className="text-xl font-bold text-primary mb-3 tracking-tight">Interests</h2>
      <div className="flex flex-wrap gap-2">
        {["Astrophysics", "Reading", "Strategy Games", "Cricket", "Footy", "Camping", "Travel"].map((i) => (
          <span
            key={i}
            className="px-3 py-1 text-sm font-medium rounded-full bg-surface text-text-body"
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  </aside>
);

export default Sidebar;
