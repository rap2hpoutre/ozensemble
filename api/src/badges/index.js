const badgesCatalog = [
  {
    category: "drinks",
    titleForList: "Badges jours",
    titleForStatus: "Jours complétés",
    description:
      "Gagnez ces badges en ajoutant votre consommation d'alcool tous les jours, en effet connaître sa consommation permet déjà de la maitriser\u00A0!",
    bgColor: "#FBD361",
    badges: [
      {
        category: "drinks",
        title: "1er jour complété",
        reduced_title: "1 jour",
        content: "Super vous avez complété votre 1er jour\u00A0! Revenez demain pour ajouter le second\u00A0!",
        stars: 1,
        CTATitle: "Voir mes badges",
        CTANavigation: ["BADGES_LIST"],
        CTALink: null,
        secondaryButtonTitle: null,
        secondaryButtonNavigation: null,
        secondaryButtonLink: null,
      },
      {
        category: "drinks",
        title: "3 jours complétés de suite",
        reduced_title: "3 jours",
        content: "Félicitations\u00A0! C'est en comptant régulièrement que l'on se rend compte de sa consommation réelle, continuez comme ça\u00A0!",
        stars: 2,
        CTATitle: "Voir mes badges",
        CTANavigation: ["BADGES_LIST"],
        CTALink: null,
        secondaryButtonTitle: null,
        secondaryButtonNavigation: null,
        secondaryButtonLink: null,
      },
      {
        title: "7 jours complétés de suite",
        reduced_title: "7 jours",
        content:
          "Toutes nos félicitations pour votre régularité\u00A0! Partagez l'application Oz Ensemble à vos proches qui voudraient aussi réduire leur consommation.",
        stars: 3,
        category: "drinks",
        CTATitle: "Donner mon avis",
        CTANavigation: ["NPS_SCREEN", { triggeredFrom: "After 7 days conso badge" }],
        CTAShare: null,
        secondaryButtonTitle: "Partager l'application",
        secondaryButtonLink: null,
        secondaryButtonShare: true,
      },
      {
        title: "14 jours complétés de suite",
        reduced_title: "14 jours",
        content:
          "Toutes nos félicitations pour votre régularité\u00A0! Partagez l'application Oz Ensemble à vos proches qui voudraient aussi réduire leur consommation.",
        stars: 4,
        category: "drinks",
        CTATitle: "Partager l'application",
        CTAShare: true,
        secondaryButtonTitle: "Non merci",
        secondaryButtonNavigation: null,
        secondaryButtonLink: null,
      },
      {
        title: "28 jours complétés de suite",
        reduced_title: "28 jours",
        content: "Bravo, déjà 4 semaines complétées\u00A0! Si Oz Ensemble vous a aidé, merci de mettre 5 étoiles, ça nous aiderait beaucoup.",
        stars: 5,
        category: "drinks",
        CTATitle: "Noter l'application",
        CTARate: true,
        CTAShare: null,
        secondaryButtonTitle: "Non merci",
        secondaryButtonNavigation: null,
        secondaryButtonLink: "",
      },
    ],
  },
  {
    category: "goals",
    titleForList: "Badges objectifs",
    titleForStatus: "Objectifs atteints",
    description:
      "Gagnez ces badges en vous fixant votre objectif, puis d'une semaine à l'autre quand votre consommation d'alcool est inférieure à votre objectif\u00A0!",
    bgColor: "#81DBD3",
    badges: [
      {
        title: "Objectif fixé",
        content: "Bravo, vous venez de fixer votre premier objectif, c'est une étape essentielle pour commencer à modifier vos habitudes.",
        stars: 1,
        category: "goals",
        CTATitle: "Voir mes badges",
        CTANavigation: ["BADGES_LIST"],
        CTALink: null,
        secondaryButtonTitle: "",
        secondaryButtonNavigation: null,
        secondaryButtonLink: "",
      },
      {
        title: "1 semaine réussie",
        content: "Bien joué, votre consommation de la semaine dernière est inférieure ou égale à votre objectif, continuez comme ça\u00A0!",
        stars: 2,
        category: "goals",
        CTATitle: "Voir mes badges",
        CTANavigation: ["BADGES_LIST"],
        CTALink: null,
        secondaryButtonTitle: "",
        secondaryButtonNavigation: null,
        secondaryButtonLink: "",
      },
      {
        title: "2 semaines réussies",
        content: "Objectif atteint une 2ème fois, félicitations\u00A0! Partagez l'application à vos proches afin d'atteindre vos objectifs ensemble.",
        stars: 3,
        category: "goals",
        CTATitle: "Partager l'application",
        CTAShare: true,
        secondaryButtonTitle: "Non merci",
        secondaryButtonNavigation: null,
        secondaryButtonLink: "",
      },
      {
        title: "3 semaines réussies",
        content:
          "Objectif atteint une 3ème semaine, bravo\u00A0! Donnez-nous votre avis sur Oz pour améliorer l'application ensemble, nous lisons tous vos messages.",
        stars: 4,
        category: "goals",
        CTATitle: "Donner mon avis",
        CTANavigation: ["NPS_SCREEN", { triggeredFrom: "After 7 days conso badge" }],
        CTALink: null,
        secondaryButtonTitle: "Partager l'application",
        secondaryButtonLink: "",
      },
      {
        title: "4 semaines réussies",
        content:
          "Toutes nos félicitations pour ce nouvel objectif atteint\u00A0! Si Oz Ensemble vous a aidé, merci de mettre 5 étoiles, ça nous aiderait beaucoup.",
        stars: 5,
        category: "goals",
        CTATitle: "Noter l'application",
        CTARate: true,
        CTALink: null,
        secondaryButtonTitle: "Non merci",
        secondaryButtonNavigation: null,
        secondaryButtonLink: "",
      },
    ],
  },
  // {
  //   category: "defis",
  //   badges: [],
  // },
  // {
  //   category: "articles",
  //   badges: [],
  // },
];

const grabBadgeFromCatalog = (category, stars) => {
  const categoryBadges = badgesCatalog.find((badge) => badge.category === category);
  return categoryBadges.badges.find((badge) => Number(badge.stars) === Number(stars));
};

module.exports = {
  badgesCatalog,
  grabBadgeFromCatalog,
};