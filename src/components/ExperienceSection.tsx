const experiences = [
  {
    role: "Release Train Engineer",
    company: "National Australia Bank",
    period: "Dec 2018 – Present",
    bullets: [
      "Led multiple squads under 'Buy My Home Application' domain, managing strategic initiatives like Income verification, Open Banking, and Product Simplification.",
      "Drive Agile ceremonies including Sprint Planning, Backlog Grooming, and PI Planning.",
      "Manage project budgets, stakeholder engagement, and cross-functional coordination.",
      "Delivered SAVie project, reducing NAB's lending application touch time by 7 minutes and improving compliance.",
      "Spearheaded LVR-related changes, impacting multiple banking assets.",
    ],
  },
  {
    role: "Project / Senior Project Manager",
    company: "ANZ Banking Group Limited",
    period: "Jun 2009 – May 2018",
    bullets: [
      "Delivered 'AmEx EPC' project — reissued ANZ AmEx cards with EMV chip & PIN, achieving $5M fraud loss benefit over 3 years and $1.1M increase in cardholder spend.",
      "Delivered 'Location Intelligence Platform' resulting in ~$10M revenue uplift through network optimisation.",
      "Managed 'Retail Lending Automation' infrastructure project — 126 servers installed and integrated with ANZ applications.",
      "Delivered multiple compliance initiatives for MasterCard, VISA & American Express on time.",
    ],
  },
  {
    role: "Release Project Manager",
    company: "ANZ Banking Group Limited",
    period: "Nov 2007 – Jun 2009",
    bullets: [
      "Managed release coordination and delivery across banking platforms.",
    ],
  },
  {
    role: "Development Lead / Manager",
    company: "ANZ Banking Group Limited",
    period: "Mar 2004 – Nov 2007",
    bullets: [
      "Led development teams delivering banking technology solutions.",
    ],
  },
  {
    role: "Senior Consultant / Project Lead",
    company: "KANBAY Inc. Ltd.",
    period: "Sep 2001 – Mar 2004",
    bullets: [
      "Provided consulting and project leadership for financial services clients.",
    ],
  },
  {
    role: "System Analyst",
    company: "Electronic Data Systems",
    period: "Sep 2000 – Sep 2001",
    bullets: [
      "Performed system analysis and technical solution design.",
    ],
  },
  {
    role: "Team Member",
    company: "American Express",
    period: "Sep 1997 – Sep 2000",
    bullets: [
      "Achieved 'Extra-Ordinary Customer Relationship' award.",
    ],
  },
];

const ExperienceSection = () => (
  <section className="animate-fade-up animation-delay-200">
    <h2 className="text-xl font-bold text-primary mb-4 tracking-tight">Experience</h2>
    <div className="space-y-6">
      {experiences.map((exp) => (
        <div key={`${exp.company}-${exp.period}`} className="space-y-1.5">
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
