import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Play } from "lucide-react";

const TrailerSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="trailer" className="py-28 md:py-36 px-6 md:px-16 lg:px-24">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-16 space-y-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-sans">
            Cinema
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            Watch the Trailer
          </h2>
          <div className="w-16 h-[1px] bg-primary mx-auto" />
        </div>

        <div
          className={`relative aspect-video bg-charcoal overflow-hidden transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Placeholder — replace src with actual trailer embed URL */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
            <div className="w-20 h-20 rounded-full border-2 border-cream/40 flex items-center justify-center transition-all duration-300 hover:border-cream hover:scale-110 cursor-pointer">
              <Play className="w-8 h-8 text-cream/80 ml-1" />
            </div>
            <p className="text-cream/50 text-xs tracking-[0.3em] uppercase font-sans">
              Trailer coming soon
            </p>
          </div>
        </div>
        <p className="text-center mt-6 text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
          A Doll Made Up of Clay — Official Trailer
        </p>
      </div>
    </section>
  );
};

export default TrailerSection;
