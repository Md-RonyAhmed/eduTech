import { cn } from "@/lib/utils";

export const SectionTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <h2 className={cn("text-xl md:text-2xl lg:text-3xl font-bold", className)}>
      {children}
    </h2>
  );
};
