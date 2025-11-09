import { Github, Heart } from "lucide-react";
import { SiSourceforge } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative py-12 glass-strong border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Gnomix
            </h3>
            <p className="text-sm text-foreground/60">
              Ubuntu without Canonical bullshit. Pure stock GNOME experience.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Links</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a
                  href="https://github.com/gubuntu-dev-icebear/Gubuntu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-2"
                  data-testid="link-footer-github"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://sourceforge.net/projects/gubuntu-desktop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-2"
                  data-testid="link-footer-sourceforge"
                >
                  <SiSourceforge className="w-4 h-4" />
                  SourceForge
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Status</h4>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse glow-purple" />
              <span className="text-foreground/80">Active Beta Development</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-sm text-foreground/60">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-accent glow-pink animate-pulse" /> by the Gnomix community
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Gnomix Project • Free and Open Source
          </p>
        </div>
      </div>
    </footer>
  );
}
