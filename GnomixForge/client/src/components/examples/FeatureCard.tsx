import FeatureCard from "../FeatureCard";
import { Package } from "lucide-react";

export default function FeatureCardExample() {
  return (
    <div className="p-8 bg-background">
      <FeatureCard
        icon={Package}
        title="Stock GNOME"
        description="Experience GNOME as the developers intended - pure, unmodified, and beautifully simple."
      />
    </div>
  );
}
