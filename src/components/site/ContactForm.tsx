import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Vul je naam in").max(100),
  email: z.string().trim().email("Ongeldig e-mailadres").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  date: z.string().trim().max(50).optional().or(z.literal("")),
  guests: z.string().trim().max(20).optional().or(z.literal("")),
  type: z.string().trim().max(50).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Vertel kort over je event").max(1000),
});

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Controleer het formulier");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    toast.success("Bedankt! We nemen binnen 24 uur contact met je op.");
    (e.target as HTMLFormElement).reset();
  }

  const inputCls =
    "w-full rounded-2xl border border-border bg-cream/60 px-5 py-4 text-sm text-espresso placeholder:text-espresso/40 focus:outline-none focus:border-copper focus:ring-2 focus:ring-copper/20 transition-all";

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <input name="name" placeholder="Naam" className={inputCls} required />
      <input name="email" type="email" placeholder="E-mail" className={inputCls} required />
      <input name="phone" placeholder="Telefoon" className={inputCls} />
      <input name="date" placeholder="Eventdatum" className={inputCls} />
      <input name="guests" placeholder="Aantal gasten" className={inputCls} />
      <select name="type" defaultValue="" className={inputCls}>
        <option value="">Type event</option>
        <option>Cocktail workshop privé</option>
        <option>Cocktail workshop bedrijf</option>
        <option>Vrijgezellenfeest workshop</option>
        <option>Cocktail catering bruiloft</option>
        <option>Cocktail catering tuinfeest</option>
        <option>Cocktail catering bedrijfsfeest</option>
        <option>Mocktail catering</option>
        <option>Gin-Tonic bar</option>
        <option>Champagne- of Prosecco-ontvangst</option>
        <option>Speciaalbier bar</option>
        <option>Wijnbar</option>
        <option>Anders...</option>
      </select>
      <textarea
        name="message"
        placeholder="Vertel ons over je event…"
        rows={5}
        className={`${inputCls} sm:col-span-2 resize-none`}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="sm:col-span-2 inline-flex justify-center items-center rounded-full bg-copper px-8 py-4 text-sm font-medium text-cream shadow-soft hover:bg-amber-glow transition-colors disabled:opacity-60"
      >
        {loading ? "Verzenden…" : "Verstuur aanvraag"}
      </button>
    </form>
  );
}