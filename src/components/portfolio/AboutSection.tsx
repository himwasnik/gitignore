import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import posterImage from "@/assets/doll-made-of-clay-poster.jpg";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-28 md:py-36 px-6 md:px-16 lg:px-24 bg-cream-dark">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
          <img
            src={posterImage}
            alt="A Doll Made Up of Clay — Cannes La Cinef 2025"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="space-y-8 lg:pt-4">
          <div className="space-y-3">
            <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-sans">
              About
            </p>
            <div className="w-16 h-[1px] bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight">
            Crossroads Films
          </h2>
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase font-sans">
            Founded by Sahil M. Ingle · Mumbai
          </p>
          <div className="space-y-5 text-muted-foreground font-sans leading-[1.85] text-[15px]">
            <p>
              Crossroads Films is a Mumbai-based film production house dedicated to creating
              powerful, globally resonant stories that bridge cultures, perspectives, and
              cinematic forms.
            </p>
            <p>
              Built at the intersection of art and commerce, Crossroads Films develops and
              produces content across feature films, short films, documentaries, and OTT
              platforms — with a strong focus on storytelling that is both authentic and
              internationally relevant.
            </p>
            <p>
              The company gained global recognition with its production{" "}
              <em className="text-foreground font-medium not-italic">"A Doll Made Up of Clay"</em>,
              officially selected at the{" "}
              <span className="text-foreground font-medium">Cannes Film Festival (La Cinef 2025)</span> —
              the only Indian short film in the selection.
            </p>
            <p>
              At its core, Crossroads Films collaborates with filmmakers from premier
              institutes like SRFTI and FTII, combining strong creative instincts with deep
              audience understanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
