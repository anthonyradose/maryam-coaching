export interface CampaignConfig {
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  whySection: {
    title: string
    paragraphs: string[]
    bullets: string[]
  }
}

export const campaigns = {
  campaign3: {
    hero: {
      title: "Ravivez la flamme dans votre couple",
      subtitle: "Retrouvez complicité, intimité et confiance dès vos premières séances, avec Maryam Caillon – Sexologue et thérapeute de couple.",
      cta: "Prendre rendez-vous"
    },
    whySection: {
      title: "Je veux retrouver notre complicité !",
      paragraphs: [
        "La flamme de la passion semble avoir laissé place à **la routine.**",
        "Les moments d'intimité sont devenus *rares ou insatisfaisants.*",
        "Parler de ce que vous aimez ou désirez est devenu **mission impossible.**"
      ],
      bullets: [
        "Vous savez que vous vous aimez, mais la distance s'est installée. La peur de perdre ce que vous avez construit est bien réelle.",
        "Vous n'êtes pas seul.e. Comme de nombreux couples avant vous, vous pouvez rallumer le feu de la passion et recréer de la complicité pour vivre un amour plus pétillant et plus fort."
      ]
    }
  },
  
  campaign4: {
    hero: {
      title: "Je veux sauver notre couple !",
      subtitle: "Apaisez les tensions et reconstruisez votre relation en quelques séances, avec Maryam Caillon – Sexologue et thérapeute de couple à Versailles (et en ligne)",
      cta: "Prendre rendez-vous"
    },
    whySection: {
      title: "Comment en est-on arrivés là ?",
      paragraphs: [
        "La colère, la frustration ou les incompréhensions **ont pris** le dessus.",
        "Vous ressentez de la confusion et vous ne savez plus comment retrouver votre équilibre à deux.",
        "La peur de perdre ce que vous avez construit est bien réelle."
      ],
      bullets: [
        "Vous savez que vous vous aimez, mais malgré vos efforts, vous n'y arrivez plus. Au fil du temps, la distance s'est installée.",
        "Vous n'êtes pas seul.e. Comme de nombreux couples avant vous, vous pouvez sortir de cette impasse, apaiser les tensions et retrouver le lien, l'amour et la complicité pour vivre un amour plus pétillant et plus fort."
      ]
    }
  }
} satisfies Record<string, CampaignConfig>