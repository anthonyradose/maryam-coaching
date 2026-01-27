import React from "react";

export interface CampaignConfig {
  bookingLink: string;
  hero: {
    title: string;
    subtitle: React.ReactNode;
    ctaSubtitle?: string;
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

const sharedHowToFixDescription = (
  <>
    Mon rôle est de vous offrir{" "}
    <span className="font-bold">un espace sécurisant</span> où vous pourrez
    parler en toute liberté sans craindre le jugement,{" "}
    <span className="italic text-pink">
      retrouver confiance en vous et dans votre couple
    </span>
    , et poser les bases d'un amour renouvelé.
  </>
);

const howToFixConseillere = {
  title: (
    <>
      En tant que <span className="italic">conseillère conjugale</span> et{" "}
      <span className="font-bold text-pink">thérapeute de couple</span>, je vous
      accompagne à :
    </>
  ),
  description: sharedHowToFixDescription,
};

const howToFixSexologue = {
  title: (
    <>
      En tant que <span className="italic">sexologue</span> et{" "}
      <span className="font-bold text-pink">thérapeute de couple</span>, je vous
      accompagne à :
    </>
  ),
  description: sharedHowToFixDescription,
};

// Base config for campaign1 & campaign2
const baseCampaign1And2 = {
  hero: {
    title: "Je veux sauver notre couple !",
    subtitle: (
      <>
        Apaisez les tensions et reconstruisez votre relation en quelques séances
        avec <span className="font-medium text-pink">Maryam Caillon</span> –
        Conseillère conjugale & Sexologue
      </>
    ),
  },
  why: {
    title: (
      <>
        Et si faire <span className="italic">renaître</span>{" "}
        <span className="font-bold text-pink">l'amour</span> était possible ?
      </>
    ),
    paragraphs: [
      <>
        Vous savez que vous vous aimez, mais malgré vos efforts, vous n’y
        arrivez plus. Au fil du temps,{" "}
        <span className="font-bold">la distance s'est installée</span>, les
        échanges se sont tendus. La colère, la frustration ou les
        incompréhensions ont pris le dessus.
      </>,
      <>
        Entre le travail, les enfants, et les contraintes du quotidien, il
        devient <span className="font-bold">difficile de trouver du temps</span>{" "}
        pour vous.
      </>,
      <>
        L'intimité est devenue{" "}
        <span className="italic text-pink">inexistante ou mécanique</span>.
      </>,
      <>
        Vous avez l'impression d'être devenus que des{" "}
        <span className="font-bold">"colocataires"</span>.
      </>,
    ],
    bullets: [
      <>
        <span className="font-bold">
          Vous ressentez de la confusion, peut-être de la tristesse,
        </span>
        <span className="italic text-pink">
          {" "}
          et ne savez plus comment retrouver votre équilibre à deux.
        </span>{" "}
        La peur de perdre ce que vous avez construit est{" "}
        <span className="font-bold">bien réelle</span>.
      </>,
      <>
        <span className="font-bold">Vous n'êtes pas seul.e</span>. Comme de
        nombreux couples avant vous, vous pouvez{" "}
        <span className="font-bold text-pink">sortir</span> de cette impasse,
        apaiser les tensions et retrouver le lien, l'amour et la complicité qui
        vous unissaient.
      </>,
    ],
  },
  howToFix: howToFixConseillere,
};

export const campaigns = {
  campaign1: {
    ...baseCampaign1And2,
    hero: {
      ...baseCampaign1And2.hero,
      ctaSubtitle:
        "Consultations en visioconférence depuis le confort de votre maison :",
    },
    bookingLink:
      "https://calendly.com/maryamcoaching/consultation-therapie-de-couple-visio-maryam",
  },

  campaign2: {
    ...baseCampaign1And2,
    hero: {
      ...baseCampaign1And2.hero,
      ctaSubtitle: "Consultations en cabinet à Versailles :",
    },
    bookingLink:
      "https://calendly.com/maryamcoaching/seance-en-cabinet-versailles",
  },

  campaign3: {
    hero: {
      title: "Ravivez la flamme dans votre couple",
      subtitle: (
        <>
          Retrouvez complicité, intimité et confiance dès vos premières séances,
          avec <span className="font-medium text-pink">Maryam Caillon</span> –
          Sexologue et thérapeute de couple à Versailles (et en ligne).
        </>
      ),
    },
    why: {
      title: (
        <>
          Je <span className="italic">veux</span>{" "}
          <span className="font-bold">retrouver</span>{" "}
          <span className="italic">notre</span>{" "}
          <span className="font-bold text-pink">complicité</span> !
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
          Parler de ce que vous aimez ou désirez est devenu{" "}
          <span className="font-bold">mission impossible.</span>
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
          nombreux couples avant vous, vous pouvez rallumer le feu de la passion
          et recréer de la complicité pour vivre un amour plus pétillant et plus
          fort.
        </>,
      ],
    },
    howToFix: howToFixSexologue,
    bookingLink:
      "https://calendly.com/maryamcoaching/seance-en-cabinet-versailles",
  },

  campaign4: {
    hero: {
      title: "Je veux sauver notre couple !",
      subtitle: (
        <>
          Apaisez les tensions et reconstruisez votre relation en quelques
          séances, avec{" "}
          <span className="font-medium text-pink">Maryam Caillon</span> –
          Sexologue et thérapeute de couple à Versailles.
        </>
      ),
    },
    why: {
      title: (
        <>
          <span className="italic">Comment</span> en est-on{" "}
          <span className="font-bold text-pink">arrivés</span> la ?
        </>
      ),
      paragraphs: [
        <>
          Vous savez que vous vous aimez, mais{" "}
          <span className="italic text-pink">malgré vos efforts</span>, vous n'y
          arrivez plus. Au fil du temps, la distance s'est installée, les
          échanges se sont tendus.
        </>,
        <>
          La colère, la frustration ou les incompréhensions{" "}
          <span className="font-bold">ont pris</span> le dessus.
        </>,
        <>
          La peur de la confusion et <span className="font-bold">vous ne</span>{" "}
          savez plus comment retrouver votre équilibre à deux.
        </>,
        <>
          La peur de perdre ce que vous avez construit est{" "}
          <span className="font-bold">bien réelle</span>.
        </>,
      ],
      bullets: [
        <>
          <span className="font-bold">Vous n'êtes pas seul.e</span>.
        </>,
        <>
          Comme de nombreux couples avant vous, vous pouvez{" "}
          <span className="font-bold text-pink">sortir</span> de cette impasse,
          apaiser les tensions et retrouver le lien, l'amour et la complicité
          qui vous unissaient autrefois.
        </>,
      ],
    },
    howToFix: howToFixSexologue,
    bookingLink:
      "https://calendly.com/maryamcoaching/seance-en-cabinet-versailles",
  },
} satisfies Record<string, CampaignConfig>;
