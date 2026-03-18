import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Index = () => (
  <div className="min-h-screen bg-background">
    <div className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
      {/* Hero */}
      <HeroSection />

      {/* Download CTA */}
      <div className="mt-6 animate-fade-up animation-delay-100 no-print">
        <Button
          className="bg-accent text-accent-foreground hover:bg-accent/90"
          onClick={() => window.print()}
        >
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </div>

      {/* Divider */}
      <hr className="my-10 border-border" />

      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-10">
          <ExperienceSection />
          <ProjectsSection />
        </div>
        <Sidebar />
      </div>
    </div>
  </div>
);

export default Index;
