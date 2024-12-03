import express from "express";

const app = express();

const quote = [
  {
    id: 1,
    citation: "Commence par toi-même",
    morale:
      "Prenez soin de vous-même avant de prendre soin des autres.La bienveillance commence par l'amour de soi.",
    isOpened: true,
  },
  {
    id: 2,
    citation:
      "Être bienveillant, c'est offrir une oreille attentive et un cœur ouvert.",
    morale: "Aujourd'hui, prend le temps d'écouter quelqu'un sans jugement.",
    isOpened: true,
  },
  {
    id: 3,
    citation:
      "La bienveillance est un rayon de lumière qui réchauffe les coeurs.",
    morale: "Partage un sourire avec un inconnu aujourd'hui.",
    isOpened: false,
  },
  {
    id: 4,
    citation: "Les petites attentions font les grande différences.",
    morale:
      "Ce soir, fais quelque chose de spécial pour quelqu'un que tu apprécies.",
    isOpened: false,
  },
  {
    id: 5,
    citation:
      "La gentillesse est un langage que les sourds peuvent entendre et que les aveugles peuvent voir.",
    morale:
      "Exprime de la gratitude envers quelqu'un qui a fait une différencedans ta vie.",
    isOpened: false,
  },
  {
    id: 6,
    citation: "Une bonne action peut illuminer la journée de quelqu'un.",
    morale:
      "Accorde un compliment sincère à quelqu'un que tu rencontre aujourd'hui.",
    isOpened: false,
  },
  {
    id: 7,
    citation: "Le bonheur, c'est de rendre les autres heureux.",
    morale:
      "Aujourd'hui, aide quelqu'un sans attendre quoi que ce soit en retour.",
    isOpened: false,
  },
  {
    id: 8,
    citation:
      "La bienveillance est une forme de beautéqui ne se démode jamais.",
    morale:
      "Prends un moment pour réfléchir à ce qui te rend reconnaissant dans ta vie.",
    isOpened: false,
  },
  {
    id: 9,
    citation: "Rendre les autres heureux, c'est se rendre heureux soi-même.",
    morale:
      "Fais quelque chose de gentil pour quelqu'un sans raison particulière.",
    isOpened: false,
  },
  {
    id: 10,
    citation:
      "Le plus grand bonheur que l'on puisse avoir est de rendre les autres heureux.",
    morale:
      "Aujourd'hui, prends une minute pour envoyer un message positif à quelqu'un.",
    isOpened: false,
  },
  {
    id: 11,
    citation: "La bienveillance est l'art de voir la beauté dans les autres.",
    morale:
      "Regarde autour de toi et trouve quelque chose de beau à apprécier.",
    isOpened: false,
  },
  {
    id: 12,
    citation:
      "Ce sont les petites gentillesses qui font une grande différence.",
    morale:
      "Ce soir, pense à une petite action bienveillante que tu pourrais poser.",
    isOpened: false,
  },
  {
    id: 13,
    citation:
      "Les mots gentils sont des fenêtres qui laissent passer la lumière dans l'obscurité.",
    morale:
      "Aujourd'hui, utilise des mots réconfortants pour encourager quelqu'un.",
    isOpened: false,
  },
  {
    id: 14,
    citation: "Aucune bonne action n'est jamais trop petite.",
    morale:
      "Prend le temps aujourd'hui de rendre service à quelqu'un qui en a besoin.",
    isOpened: false,
  },
  {
    id: 15,
    citation: "Les gentillesses sont des graines du bonheur.",
    morale:
      "Semons des graines de bienveillance autour de nous en posant un geste simple mais généreux.",
    isOpened: false,
  },
  {
    id: 16,
    citation: "La bienveillance est un cadeau qui se donne sans attente.",
    morale:
      "Fais une surprise agréable à quelqu'un que tu apprécie aujourd'hui.",
    isOpened: false,
  },
  {
    id: 17,
    citation: "il est toujours temps d'être gentil.",
    morale:
      "Aujourd'hui, donne de la place à la bienveillance en offrant ton temps à quelqu'un.",
    isOpened: false,
  },
  {
    id: 18,
    citation: "La bienveillance n'a ni condition, ni limite.",
    morale:
      "Prend un moment pour être généreux, même envers ceux qui t'énervent.",
    isOpened: false,
  },
  {
    id: 19,
    citation: "Un petit geste peut changer une journée entière.",
    morale:
      "Fais un geste bienveillant, même s'il semble insignifiant à première vue.",
    isOpened: false,
  },
  {
    id: 20,
    citation:
      "Les actionsde gentillesse se multiplient lorsqu'elles sont partagées.",
    morale:
      "Aujourd'hui, propose un acte de gentillesse qui pourrait inspirer quelqu'un d'autre à en faire de même.",
    isOpened: false,
  },
  {
    id: 21,
    citation: "Être bienveillant, c'est semer des graines de joie.",
    morale: "Choisis de répandre un peu de joie là où tu vas aujourd'hui.",
    isOpened: false,
  },
  {
    id: 22,
    citation: "Il y a toujours une bonne raison de sourire.",
    morale:
      "Rappelle-toi que chaque sourire partagé peut éclairer la journée de quelqu'un.",
    isOpened: false,
  },
  {
    id: 23,
    citation:
      "La bienveillance transforme un simple acte en un souvenir mémorable.",
    morale: "Surprend quelqu'un avec un petit acte attentionné aujourd'hui.",
    isOpened: false,
  },
  {
    id: 24,
    citation: "Le vrai esprit de Noël, c'est de donner sans attendre.",
    morale:
      "Aujourd'hui, offre un cadeau, même si c'est une attention toute simple, à quelqu'un qui en a besoin.",
    isOpened: false,
  },
];

app.get("/quote", (req, res) => {
  res.json(quote);
});

const port = 3310;

app.listen(port, () => {});

export default quote;
