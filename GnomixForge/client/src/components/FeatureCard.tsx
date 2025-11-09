import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-6 glass hover-elevate active-elevate-2 transition-all duration-300 group border-primary/20 hover:border-primary/40 hover:scale-105">
      <div className="mb-4 inline-block p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 glow-purple group-hover:glow-pink group-hover:scale-110 transition-all">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground" data-testid={`text-feature-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {title}
      </h3>
      <p className="text-foreground/70 leading-relaxed" data-testid={`text-feature-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {description}
      </p>
    </Card>
  );
}
