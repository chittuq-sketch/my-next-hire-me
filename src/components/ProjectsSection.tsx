const projects = [
  {
    name: "AmEx EPC",
    description:
      "Managed reissue of ANZ AmEx cards with EMV chip & PIN capability across a global team of 28 — delivering $5M fraud loss benefit and $1.1M increase in cardholder spend.",
  },
  {
    name: "Location Intelligence Platform",
    description:
      "Delivered a platform resulting in ~$10M revenue uplift through network optimisation and improved customer/banker experience.",
  },
  {
    name: "CAMO (Customer Account Management Optimisation)",
    description:
      "Set up complex infrastructure with ~38 servers, deploying Experian's Power Curve Customer Management product with a globally distributed team of 47.",
  },
  {
    name: "Loyalty Transformation Program",
    description:
      "Conducted RFPs with 3 vendors, provided technical & security insights, and led a virtual team of 32 through design, development, testing & implementation.",
  },
];

const ProjectsSection = () => (
  <section className="animate-fade-up animation-delay-300">
    <h2 className="text-xl font-bold text-primary mb-4 tracking-tight">Key Projects</h2>
    <div className="space-y-4">
      {projects.map((p) => (
        <div key={p.name} className="p-4 rounded-lg bg-surface space-y-1">
          <span className="font-semibold text-foreground">{p.name}</span>
          <p className="text-sm text-text-body">{p.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
