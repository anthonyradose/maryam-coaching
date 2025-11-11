import React from "react";

export interface CampaignConfig {
  hero: {
    title: string;
    subtitle: React.ReactNode;
    cta: string;
    href: string;
  };
}

export const campaigns = {
  campaign3: {
    hero: {
      title: "Ravivez la flamme dans votre couple",
      subtitle: (
        <>
          Retrouvez complicité, intimité et confiance dès vos premières séances,
          avec <span className="font-medium text-pink">Maryam Caillon</span> –
          Sexologue et thérapeute de couple à Versailles (et en ligne)
        </>
      ),
      cta: "Prendre rendez-vous",
      href: "https://calendly.com/maryamcoaching/seance-en-cabinet-versailles",
    },
  },

  campaign4: {
    hero: {
      title: "Je veux sauver notre couple !",
      subtitle: (
        <>
          Apaisez les tensions et reconstruisez votre relation en quelques
          séances, avec
          <span className="font-medium text-pink">Maryam Caillon</span> –
          Sexologue et thérapeute de couple à Versailles.
        </>
      ),
      cta: "Prendre rendez-vous",
      href: "https://calendly.com/maryamcoaching/seance-en-cabinet-versailles",
    },
  },
} satisfies Record<string, CampaignConfig>;
