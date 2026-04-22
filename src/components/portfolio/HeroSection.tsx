import { Button } from "@/components/ui/button";
import sahilImage from "@/assets/sahil-cannes.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-10">
          <div className="space-y-3">
            <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-sans font-medium">
              Crossroads Films
            </p>
            <div className="w-16 h-[1px] bg-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold leading-[1.08] text-foreground">
            Stories That
            <br />
            Reach The{" "}
            <span className="italic text-primary">World</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-sans font-light max-w-md leading-relaxed">
            From Mumbai to global cinema — crafting narratives that
            transcend borders and touch souls.
          </p>
          <div className="flex gap-4 pt-4">
            <Button
              size="lg"
              className="rounded-none px-10 py-6 text-xs tracking-[0.25em] uppercase font-sans"
              onClick={() => scrollTo("work")}
            >
              Explore Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-none px-10 py-6 text-xs tracking-[0.25em] uppercase font-sans border-foreground/30 text-foreground hover:bg-foreground hover:text-background"
              onClick={() => scrollTo("contact")}
            >
              Connect
            </Button>
          </div>
        </div>

        <div className="relative h-[500px] lg:h-[620px] overflow-hidden">
          <img
            src={sahilImage}
            alt="Sahil M. Ingle at Festival de Cannes"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="text-xs text-foreground/70 tracking-[0.3em] uppercase font-sans">
              Sahil M. Ingle — Producer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
