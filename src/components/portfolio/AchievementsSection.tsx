import { Award, Film, Globe, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const achievements = [
  {
    icon: Award,
    title: "Cannes Film Festival",
    description: "Official Selection — La Cinef 2025. The only Indian short film in the selection.",
  },
  {
    icon: Star,
    title: "Zero-Budget, Global Impact",
    description: "Created on a zero-budget model, proving bold storytelling transcends scale and boundaries.",
  },
  {
    icon: Globe,
    title: "Cross-Cultural Cinema",
    description: "International collaborations bridging cultures, perspectives, and cinematic traditions.",
  },
  {
    icon: Film,
    title: "Premier Institute Alumni",
    description: "Collaborations with filmmakers from SRFTI and FTII — India's finest film schools.",
  },
];

const AchievementsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="achievements" className="py-28 md:py-36 px-6 md:px-16 lg:px-24">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-20 space-y-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-sans">
            Recognition
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            Achievements
          </h2>
          <div className="w-16 h-[1px] bg-primary mx-auto" />
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {achievements.map((item) => (
            <div key={item.title} className="text-center space-y-5 p-4">
              <div className="w-14 h-14 mx-auto rounded-full border border-primary/30 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
