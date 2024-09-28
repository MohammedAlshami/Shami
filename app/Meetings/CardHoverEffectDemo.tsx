import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Ammar Azfar",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: "https://endeavor.org/wp-content/uploads/2021/10/Endeavor-Social-Share.png",
    date: "12:30 PM - 1:30 PM",
  },

];
