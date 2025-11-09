import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import gubuntuIcon from "@assets/icon_1762664084612.png";

export default function Hero() {
  const scrollToDownload = () => {
    const element = document.getElementById("download");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-card"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)`
        }}
      />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="mb-8 inline-block animate-float">
          <img 
            src={gubuntuIcon} 
            alt="Gnomix Logo" 
            className="w-32 h-32 mx-auto glow-purple animate-glow-pulse rounded-2xl"
            data-testid="img-logo"
          />
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient">
            Ubuntu Without
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
            Canonical Bullshit
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto">
          Pure Stock GNOME Experience
        </p>
        
        <p className="text-base sm:text-lg text-foreground/60 mb-12 max-w-2xl mx-auto">
          No modifications. No bloat. Just Ubuntu with the clean, vanilla GNOME desktop you deserve.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg"
            onClick={scrollToDownload}
            className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent glow-purple animate-glow-pulse hover:scale-105 transition-transform"
            data-testid="button-download-hero"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Gnomix
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            onClick={scrollToDownload}
            className="text-lg px-8 py-6 glass hover:scale-105 transition-transform"
            data-testid="button-learn-more"
          >
            Learn More
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-foreground/50">
          <span className="font-mono">Beta 2025.11.05</span>
          <span>•</span>
          <span>5.5 GB ISO</span>
        </div>
      </div>

      <button
        onClick={scrollToDownload}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        data-testid="button-scroll-indicator"
      >
        <ChevronDown className="w-8 h-8 text-primary glow-purple" />
      </button>
    </section>
  );
}
