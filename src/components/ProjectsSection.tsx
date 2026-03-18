import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "CloudDeploy",
    description: "Open-source deployment platform for containerized apps. 1.2K GitHub stars.",
    link: "#",
  },
  {
    name: "DataViz Dashboard",
    description: "Real-time analytics dashboard built with React and D3.js for e-commerce metrics.",
    link: "#",
  },
];

const ProjectsSection = () => (
  <section className="animate-fade-up animation-delay-300">
    <h2 className="text-xl font-bold text-primary mb-4 tracking-tight">Projects</h2>
    <div className="space-y-4">
      {projects.map((p) => (
        <div key={p.name} className="p-4 rounded-lg bg-surface space-y-1">
          <a
            href={p.link}
            className="font-semibold text-foreground hover:text-accent transition-colors inline-flex items-center gap-1.5"
          >
            {p.name} <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <p className="text-sm text-text-body">{p.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
