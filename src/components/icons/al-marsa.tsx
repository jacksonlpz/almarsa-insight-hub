import {
  Shield,
  FileText,
  TrendingUp,
  Scale,
  Globe,
  Package,
  Eye,
  Network,
  CheckCircle2,
  Lightbulb,
  Users,
  Settings,
  Target,
  type LucideIcon,
} from "lucide-react";

// Icon name type for type safety
export type AlMarsaIconName =
  | "trademark"
  | "patent"
  | "strategy"
  | "disputes"
  | "advantage-network"
  | "industrial"
  | "advantage-insight"
  | "advantage-governance"
  | "defence"
  | "audit"
  | "execution"
  | "network"
  | "governance"
  | "innovation";

// Icon mapping
const iconMap: Record<AlMarsaIconName, LucideIcon> = {
  trademark: Shield,
  patent: FileText,
  strategy: Target,
  disputes: Scale,
  "advantage-network": Globe,
  industrial: Package,
  "advantage-insight": Eye,
  "advantage-governance": CheckCircle2,
  defence: Shield,
  audit: Settings,
  execution: TrendingUp,
  network: Network,
  governance: CheckCircle2,
  innovation: Lightbulb,
};

// Props interface for icon rendering
interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
}

/**
 * Renders an Al Marsa icon by name
 * @param iconName - The name of the icon to render
 * @param props - Icon properties (className, size, strokeWidth, color)
 * @returns JSX element with the corresponding Lucide icon
 */
export function renderAlMarsaIcon(
  iconName: AlMarsaIconName,
  props?: IconProps
): JSX.Element {
  const IconComponent = iconMap[iconName];

  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in iconMap. Defaulting to Shield.`);
    return <Shield {...props} />;
  }

  return <IconComponent {...props} />;
}

// Export all icon names for reference
export const availableIcons = Object.keys(iconMap) as AlMarsaIconName[];
