import { Package, Ban, Rocket, Sparkles } from "lucide-react";
import FeatureCard from "./FeatureCard";

export default function Features() {
  const features = [
    {
      icon: Package,
      title: "Stock GNOME",
      description: "Experience GNOME as the developers intended - pure, unmodified, and beautifully simple. No custom themes or modifications."
    },
    {
      icon: Ban,
      title: "Canonical Free",
      description: "Completely free from Canonical's ecosystem. No Snap packages, no telemetry, no corporate bloat - just pure Ubuntu base."
    },
    {
      icon: Rocket,
      title: "Actively Developing",
      description: "Currently in active development and testing phase. Join our beta program and help shape the future of Gubuntu."
    },
    {
      icon: Sparkles,
      title: "No Ubuntu Themes",
      description: "Say goodbye to orange and brown. Enjoy the clean, modern aesthetics of vanilla GNOME without Ubuntu's visual customizations."
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Why Gnomix?
            </span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            A no-nonsense Linux distribution that respects your choice for a pure GNOME experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
