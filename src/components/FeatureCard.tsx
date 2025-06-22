import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  img: string;
  className?: string;
}

const FeatureCard = ({ className, title, subtitle, img }: FeatureCardProps) => {
  return (
    <div
      className={cn(
        className,
        "bg-card border-outline hover:border-accent flex h-[480px] flex-col justify-between rounded-2xl border transition-all duration-300 hover:scale-105",
      )}
    >
      <img
        src={img}
        alt={title}
        className="h-full max-h-[324px] w-full object-contain"
      />
      <div className="m-8 space-y-4">
        <h3 className="text-lg font-medium text-[#E4E4E7]">{title}</h3>
        <p className="text-regular max-w-[480px] text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
