import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ComingSoon } from "@/components/site/comingSoon";
import { SiteView } from "@/components/site/siteView";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "Wandering Bar · Binnenkort geschonken" }],
  }),
  component: LandingPage,
});

function LandingPage() {
  const [showSite, setShowSite] = useState(false);

  if (showSite) {
    return <SiteView />;
  }

  return <ComingSoon onEnter={() => setShowSite(true)} />;
}
