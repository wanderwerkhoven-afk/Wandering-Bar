import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { nl } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Vul je naam in").max(100),
  email: z.string().trim().email("Ongeldig e-mailadres").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  date: z.string().trim().max(50).optional().or(z.literal("")),
  guests: z.string().trim().max(20).optional().or(z.literal("")),
  type: z.string().trim().max(50).optional().or(z.literal("")),
  service: z.string().trim().max(50).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Vertel kort over je event").max(1000),
});

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

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
    setDate(undefined);
  }

  const inputCls =
    "w-full rounded-2xl border border-border bg-cream/60 px-5 py-4 text-sm text-espresso placeholder:text-espresso/40 focus:outline-none focus:border-copper focus:ring-2 focus:ring-copper/20 transition-all";

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <input name="name" placeholder="Naam" className={inputCls} required />
      <input name="company" placeholder="Bedrijfsnaam (optioneel)" className={inputCls} />
      <input name="phone" placeholder="Telefoon" className={inputCls} />
      <input name="email" type="email" placeholder="E-mail" className={inputCls} required />
      
      <div className="relative">
        <input type="hidden" name="date" value={date ? format(date, "yyyy-MM-dd") : ""} />
        <Popover>
          <PopoverTrigger asChild>
            <button
              type="button"
              className={cn(
                inputCls,
                "flex items-center justify-between text-left",
                !date && "text-espresso/40"
              )}
            >
              {date ? format(date, "PPP", { locale: nl }) : "Eventdatum"}
              <CalendarIcon className="h-4 w-4 opacity-50" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 border-none shadow-elegant" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              locale={nl}
              className="bg-cream border border-border rounded-2xl"
            />
          </PopoverContent>
        </Popover>
      </div>

      <input name="guests" placeholder="Aantal gasten" className={inputCls} />
      <select name="type" defaultValue="" className={inputCls}>
        <option value="">Type event</option>
        <option>Bruiloft</option>
        <option>Bedrijfsevent</option>
        <option>Personeelsborrel</option>
        <option>Tuinfeest</option>
        <option>Verjaardag</option>
        <option>Prive feest</option>
        <option>Anders...</option>
      </select>
      <select name="service" defaultValue="" className={inputCls}>
        <option value="">Gewenste dienst</option>
        <option>Cocktail catering</option>
        <option>Cocktail workshops</option>
        <option>Wijnbar</option>
        <option>Speciaalbier bar</option>
        <option>Gin&Tonic bar</option>
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