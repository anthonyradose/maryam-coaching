import React from "react";

export interface CampaignConfig {
  hero: {
    title: string;
    subtitle: React.ReactNode;
    ctaSubtitle?: string;
    href: string;
  };
  why: {
    title: React.ReactNode;
    paragraphs: React.ReactNode[];
    bullets: React.ReactNode[];
  };
  howToFix: {
    title: React.ReactNode;
    description: React.ReactNode;
  };
}

export const campaigns = {
  campaign1: {
    hero: {
      title: "Je veux sauver notre couple !",
      subtitle: (
        <>
          Apaisez les tensions et reconstruisez votre relation en quelques séances éteindre avec{" "}
          <span className="font-medium text-pink">Maryam Caillon</span> – Conseillère conjugale & Sexologue
        </>
      ),
      ctaSubtitle: "Consultations en visioconférence depuis le confort de votre maison",
      href: "https://calendly.com/maryamcoaching/seance-en-visioconference",
    },
    why: {
      title: (
        <>
          Et si faire <span className="italic">renaitre</span>{" "}
          <span className="font-bold text-pink">l'amour</span> était possible ?
        </>
      ),
      paragraphs: [
        <>
          Entre le travail, les enfants, et les contraintes du quotidien, il devient difficile de trouver du temps pour vous.
        </>,
        <>
          L'intimité est devenue inexistante ou mécanique.
        </>,
        <>
          Vous avez l'impression d'être devenus que des "colocataires".
        </>,
      ],
      bullets: [
        <>
          <span className="font-bold">Vous ne savez plus comment retrouver votre équilibre à deux.</span> La peur de perdre ce que vous avez construit est bien réelle.
        </>,
        <>
          <span className="font-bold">Vous n'êtes pas seul.e</span>. Surtout, ce n'est pas une fatalité.
        </>,
      ],
    },
    howToFix: {
      title: (
        <>
          En tant que <span className="italic">conseillère conjugale</span> et{" "}
          <span className="font-bold text-pink">thérapeute de couple</span>, je
          vous accompagne à :
        </>
      ),
      description: (
        <>
          Mon rôle est de vous offrir{" "}
          <span className="font-bold">un espace sécurisant</span> où vous pourrez
          parler en toute liberté sans craindre le jugement,{" "}
          <span className="italic text-pink">
            retrouver confiance en vous et dans votre couple
          </span>
          , et poser les bases d'un amour renouvelé.
        </>
      ),
    },
  },

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
    howToFix: {
      title: (
        <>
          En tant que <span className="italic">sexologue</span> et{" "}
          <span className="font-bold text-pink">thérapeute de couple</span>, je
          vous accompagne à :
        </>
      ),
      description: (
        <>
          Mon rôle est de vous offrir{" "}
          <span className="font-bold">un espace sécurisant</span> où vous pourrez
          parler en tout liberté sans craindre le jugement,{" "}
          <span className="italic text-pink">
            retrouver confiance en vous et dans votre couple
          </span>
          , et poser les bases d'un amour renouvelé.
        </>
      ),
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
    howToFix: {
      title: (
        <>
          En tant que <span className="italic">sexologue</span> et{" "}
          <span className="font-bold text-pink">thérapeute de couple</span>, je
          vous accompagne à :
        </>
      ),
      description: (
        <>
          Mon rôle est de vous offrir{" "}
          <span className="font-bold">un espace sécurisant</span> où vous pourrez
          parler en tout liberté sans craindre le jugement,{" "}
          <span className="italic text-pink">
            retrouver confiance en vous et dans votre couple
          </span>
          , et poser les bases d'un amour renouvelé.
        </>
      ),
    },
  },
} satisfies Record<string, CampaignConfig>;
