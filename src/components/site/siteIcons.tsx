import type { SVGProps } from "react";

/**
 * Alle line-art iconen komen letterlijk uit de design-HTML. De componenten
 * renderen de vaste paths; extra paths per gebruiksplek gaan mee als children.
 */

export function PijlRechts(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  );
}

export function Ster(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12 2 l2.6 7.4 L22 12 l-7.4 2.6 L12 22 l-2.6 -7.4 L2 12 l7.4 -2.6 Z"></path>
    </svg>
  );
}

export function ShakerIcon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 36 52" fill="none" strokeWidth="2.4" strokeLinecap="round" {...props}>
      <path d="M12 4 h12 v6 h-12 Z"></path>
      <path d="M10 10 h16 l2 8 h-20 Z"></path>
      <path d="M8 18 h20 l3 24 q0 4 -4 4 h-18 q-4 0 -4 -4 Z"></path>
      {children}
    </svg>
  );
}

export function CocktailGlasIcon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 52" fill="none" strokeWidth="2.4" strokeLinecap="round" {...props}>
      <path d="M6 6 h28 L20 24 Z"></path>
      <path d="M20 24 v18"></path>
      <path d="M11 46 h18"></path>
      {children}
    </svg>
  );
}

export function WijnGlasIcon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 36 52" fill="none" strokeWidth="2.4" strokeLinecap="round" {...props}>
      <path d="M10 4 h16 v8 q0 12 -8 12 q-8 0 -8 -12 Z"></path>
      <path d="M18 24 v20"></path>
      <path d="M10 48 h16"></path>
      {children}
    </svg>
  );
}

export function BierIcon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 44 52" fill="none" strokeWidth="2.4" strokeLinecap="round" {...props}>
      <path d="M8 12 h22 v30 q0 4 -4 4 h-14 q-4 0 -4 -4 Z"></path>
      <path d="M30 18 h4 q6 0 6 8 q0 8 -6 8 h-4"></path>
      <path d="M12 12 q0 -6 5 -6 q3 0 4 3 q1 -3 4 -3 q5 0 5 6" opacity="0.6"></path>
      {children}
    </svg>
  );
}

export function ZonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      {...props}
    >
      <circle cx="12" cy="12" r="4.4"></circle>
      <path d="M12 2.5 v2.6 M12 18.9 v2.6 M2.5 12 h2.6 M18.9 12 h2.6 M5.2 5.2 l1.9 1.9 M16.9 16.9 l1.9 1.9 M18.8 5.2 l-1.9 1.9 M7.1 16.9 l-1.9 1.9"></path>
    </svg>
  );
}

export function MaanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M20.4 14.2 A8.8 8.8 0 0 1 9.8 3.6 A8.8 8.8 0 1 0 20.4 14.2 Z"></path>
    </svg>
  );
}

export function DownloadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <path d="m7 10 5 5 5-5"></path>
      <path d="M12 15V3"></path>
    </svg>
  );
}

export function TelefoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  );
}

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v2"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}
