import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import dollPoster from "@/assets/doll-made-of-clay-poster.jpg";
import cicadasPoster from "@/assets/song-of-cicadas-poster.jpg";

const films = [
  {
    title: "A Doll Made Up of Clay",
    description:
      "A cross-cultural collaboration created on a zero-budget model — the only Indian short film selected at Cannes La Cinef 2025. Directed by Kokob Gebrehaweria Tesfay.",
    tag: "Official Selection — La Cinef, Cannes 2025",
    poster: dollPoster,
    featured: true,
  },
  {
    title: "Song of Cicadas",
    description:
      "A poetic exploration of memory, identity, and the invisible ties that bind us to the land. Directed by Tushar Singh. Produced by Sahil Ingle.",
    tag: "SRFTI Production",
    poster: cicadasPoster,
    featured: false,
  },
];

const FeaturedWorkSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="work" className="py-28 md:py-36 px-6 md:px-16 lg:px-24">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-20 space-y-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-sans">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            Featured Work
          </h2>
          <div className="w-16 h-[1px] bg-primary mx-auto" />
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {films.map((film) => (
            <div
              key={film.title}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[2/3] overflow-hidden mb-6 transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.01]">
                <img
                  src={film.poster}
                  alt={film.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {film.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="rounded-none bg-primary text-primary-foreground text-[10px] tracking-[0.2em] uppercase font-sans px-3 py-1.5 hover:bg-primary">
                      Cannes 2025
                    </Badge>
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <p className="text-[10px] tracking-[0.3em] uppercase text-primary font-sans font-medium">
                  {film.tag}
                </p>
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  {film.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {film.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
