import React from "react";

export interface CampaignConfig {
  hero: {
    title: string;
    subtitle: React.ReactNode;
    cta: string;
    href: string;
  };
  why: {
    title: React.ReactNode;
    paragraphs: React.ReactNode[];
    bullets: React.ReactNode[];
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
    why: {
      title: (
        <>
          Je<span className="italic"> veux</span>
          <span className="font-bold"> retrouver</span>
          <span className="italic"> notre</span>
          <span className="font-bold text-pink"> complicité</span> !
        </>
      ),
      paragraphs: [
        <>
          La flamme de la passion semble avoir laissé place à{" "}
          <span className="font-bold">la routine.</span>
        </>,
        <>
          Les moments d'intimité sont devenus{" "}
          <span className="italic text-pink">rares ou insatisfaisants.</span>
        </>,
        <>
          Parler de ce que vous aimez ou désirez est devenu
          <span className="font-bold"> mission impossible.</span>
        </>,
      ],
      bullets: [
        <>
          <span className="font-bold">Vous savez que vous vous aimez</span>,
          mais la distance s'est installée. La peur de perdre ce que vous avez
          construit est bien réelle.
        </>,
        <>
          <span className="font-bold">Vous n'êtes pas seul.e</span>. Comme de
          nombreux couples avant vous, vous pouvez rallumer le feu de la passion et recréer de la complicité pour vivre un amour plus pétillant et plus fort.
        </>,
      ],
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
    why: {
      title: (
        <>
          Votre<span className="italic"> couple</span> est en{" "}
          <span className="font-bold text-pink">crise</span>
        </>
      ),
      paragraphs: [
        <>
          Les disputes sont devenues{" "}
          <span className="font-bold">quotidiennes</span> et épuisantes.
        </>,
        <>
          Vous vous sentez{" "}
          <span className="italic text-pink">incompris</span> et seul dans votre relation.
        </>,
        <>
          La <span className="font-bold">séparation</span> semble être la seule issue.
        </>,
      ],
      bullets: [
        <>
          <span className="font-bold">Il n'est pas trop tard</span>. Même les couples en grande difficulté peuvent retrouver l'harmonie avec le bon accompagnement.
        </>,
        <>
          <span className="font-bold">Vous méritez d'être heureux ensemble</span>. Donnez-vous une chance de reconstruire une relation saine et épanouissante.
        </>,
      ],
    },
  },
} satisfies Record<string, CampaignConfig>;
