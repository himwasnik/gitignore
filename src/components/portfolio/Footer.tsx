const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "About", id: "about" },
    { label: "Work", id: "work" },
    { label: "Gallery", id: "gallery" },
    { label: "Achievements", id: "achievements" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="py-14 px-6 md:px-16 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-xl font-serif font-semibold text-foreground">
            Crossroads Films
          </p>
          <p className="text-[11px] text-muted-foreground font-sans tracking-wider mt-1">
            By Sahil M. Ingle
          </p>
        </div>
        <nav className="flex gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-[11px] text-muted-foreground hover:text-foreground transition-colors font-sans tracking-[0.2em] uppercase"
            >
              {link.label}
            </button>
          ))}
        </nav>
        <p className="text-[11px] text-muted-foreground font-sans">
          © 2026 Crossroads Films. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
