import headshot from "@/assets/headshot.jpg";
import { Mail, MapPin, ExternalLink } from "lucide-react";

const HeroSection = () => (
  <section className="animate-fade-up">
    <div className="flex flex-col sm:flex-row items-start gap-6">
      <img
        src={headshot}
        alt="Profile photo"
        className="w-24 h-24 rounded-full object-cover border-2 border-border shrink-0"
      />
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
          Alex Johnson
        </h1>
        <p className="text-lg text-text-body font-medium">
          Full-Stack Engineer specializing in scalable web applications &amp; cloud infrastructure
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4" /> San Francisco, CA
          </span>
          <a
            href="mailto:alex@example.com"
            className="inline-flex items-center gap-1.5 text-accent hover:underline"
          >
            <Mail className="w-4 h-4" /> alex@example.com
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-accent hover:underline"
          >
            <ExternalLink className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
