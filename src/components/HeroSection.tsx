import { Mail, Phone } from "lucide-react";

const HeroSection = () => (
  <section className="animate-fade-up">
    <div className="flex flex-col sm:flex-row items-start gap-6">
      <img
        src={headshot}
        alt="Chittu Sriramaiah"
        className="w-24 h-24 rounded-full object-cover border-2 border-border shrink-0"
      />
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
          Chittu Sriramaiah
        </h1>
        <p className="text-lg text-text-body font-medium">
          Project/Program Management | Agile | Financial Services
        </p>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Results-driven Agile Project Manager with 20+ years of experience in banking and financial services. Proven expertise in managing large-scale projects across digital banking, credit cards, home loans, and compliance.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Phone className="w-4 h-4" /> 0466 394 187
          </span>
          <a
            href="mailto:chittu.Sriramaiah@nab.com.au"
            className="inline-flex items-center gap-1.5 text-accent hover:underline"
          >
            <Mail className="w-4 h-4" /> chittu.Sriramaiah@nab.com.au
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
