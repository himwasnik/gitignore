import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Message sent successfully. We'll be in touch.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 md:py-36 px-6 md:px-16 lg:px-24 bg-cream-dark">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="space-y-4 mb-14">
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-sans">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            Let's Create Something
            <br />
            <span className="italic text-primary">Meaningful</span>
          </h2>
          <div className="w-16 h-[1px] bg-primary mx-auto" />
          <p className="text-sm text-muted-foreground font-sans pt-2">
            For collaborations, festival projects, and production inquiries
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <Input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="rounded-none border-border bg-background/50 h-12 font-sans text-sm placeholder:text-muted-foreground/50"
            maxLength={100}
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="rounded-none border-border bg-background/50 h-12 font-sans text-sm placeholder:text-muted-foreground/50"
            maxLength={255}
          />
          <Textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="rounded-none border-border bg-background/50 min-h-[150px] font-sans text-sm placeholder:text-muted-foreground/50"
            maxLength={1000}
          />
          <Button
            type="submit"
            size="lg"
            className="w-full rounded-none py-6 text-xs tracking-[0.25em] uppercase font-sans"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
