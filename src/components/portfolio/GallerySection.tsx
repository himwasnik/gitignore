import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import sahilCannes from "@/assets/sahil-cannes.jpg";
import dollPoster from "@/assets/doll-made-of-clay-poster.jpg";
import cicadasPoster from "@/assets/song-of-cicadas-poster.jpg";

const images = [
  { src: sahilCannes, alt: "Sahil M. Ingle at Festival de Cannes", span: "col-span-2 row-span-2" },
  { src: dollPoster, alt: "A Doll Made Up of Clay — Official Poster", span: "col-span-1 row-span-2" },
  { src: cicadasPoster, alt: "Song of Cicadas — Official Poster", span: "col-span-1 row-span-1" },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="gallery" className="py-28 md:py-36 px-6 md:px-16 lg:px-24 bg-cream-dark">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-20 space-y-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-sans">
            Gallery
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            Moments & Stills
          </h2>
          <div className="w-16 h-[1px] bg-primary mx-auto" />
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[260px] transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.span} overflow-hidden group cursor-pointer`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
