import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const VisionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28 md:py-36 px-6 md:px-16 lg:px-24 bg-cream-dark">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center space-y-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-sans">
          Philosophy
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight">
          The Vision Behind
          <br />
          <span className="italic text-primary">The Frame</span>
        </h2>
        <div className="w-16 h-[1px] bg-primary mx-auto" />
        <p className="text-lg text-muted-foreground font-sans leading-[1.9] max-w-2xl mx-auto">
          Bold storytelling can transcend scale, budget, and boundaries. Every frame is a
          decision. Every story, a responsibility. The pursuit is not just to make films,
          but to craft experiences that linger — narratives that challenge, inspire, and
          connect humanity across every divide.
        </p>
        <p className="text-muted-foreground font-sans leading-[1.9] max-w-2xl mx-auto">
          Rooted in cross-cultural collaboration and driven by an uncompromising creative
          vision, Crossroads Films believes that cinema is the most powerful language of
          our time.
        </p>
      </div>
    </section>
  );
};

export default VisionSection;
