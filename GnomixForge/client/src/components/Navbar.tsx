import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import gubuntuIcon from "@assets/icon_1762664084612.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img 
              src={gubuntuIcon} 
              alt="Gnomix Logo" 
              className="w-10 h-10 glow-purple rounded-md"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Gnomix
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground/90 hover:text-foreground transition-colors text-sm font-medium"
              data-testid="link-features"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("download")}
              className="text-foreground/90 hover:text-foreground transition-colors text-sm font-medium"
              data-testid="link-download"
            >
              Download
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/90 hover:text-foreground transition-colors text-sm font-medium"
              data-testid="link-about"
            >
              About
            </button>
            <Button 
              onClick={() => scrollToSection("download")}
              className="glow-purple"
              data-testid="button-download-nav"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass-strong border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-3 py-2 text-foreground/90 hover:text-foreground hover-elevate rounded-md transition-colors"
              data-testid="link-features-mobile"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("download")}
              className="block w-full text-left px-3 py-2 text-foreground/90 hover:text-foreground hover-elevate rounded-md transition-colors"
              data-testid="link-download-mobile"
            >
              Download
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-2 text-foreground/90 hover:text-foreground hover-elevate rounded-md transition-colors"
              data-testid="link-about-mobile"
            >
              About
            </button>
            <Button 
              onClick={() => scrollToSection("download")}
              className="w-full glow-purple"
              data-testid="button-download-mobile"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
