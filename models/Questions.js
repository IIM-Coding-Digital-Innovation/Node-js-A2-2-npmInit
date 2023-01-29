module.exports = class Questions {
  questions = [
    {
      id: 1,
      question: "La bonne rep c'est 3",
      good: "celle-ci",
      bads: ["nop", "non plus", "encore moins"]
    },
    {
      id: 2,
      question: "2La bonne rep c'est 3",
      good: "2celle-ci",
      bads: ["2nop", "2non plus", "2encore moins"]
    },
    {
      id: 3,
      question: "3La bonne rep c'est 3",
      good: "3celle-ci",
      bads: ["3nop", "3non plus", "3encore moins"]
    },
    {
      id: 4,
      question: 'À quel écrivain doit-on "les Mémoires d\'outre-tombe" ?',
      good: "Chateaubriand",
      bads: ["Rousseau", "Shakespeare", "Victor Hugo"]
    },
    {
      id: 5,
      question: "Aux USA, quelle est la principale base de lancement d'engins spatiaux ?",
      good: "Cap Canaveral",
      bads: ["Wallops Flight Facility", "Mid-Atlantic Regional Spaceport", "Centre spatial Kennedy"]
    },
    {
      id: 6,
      question: "Quel est le plus grand pays du monde en termes de superficie?",
      good: "Russie",
      bads: ["Inde", "États-Unis", "Chine"]
    },
    {
      id: 7,
      question: "Quelle est la plus grande étoile connue ?",
      good: "UY Scuti ",
      bads: ["VY Canis Majoris", "Betelgeuse", "Antares"]
    },
    {
      id: 8,
      question: "Quel est le plus grand animal ayant vécu ?",
      good: "Baleine bleue",
      bads: ["Diplodocus", "Argentinosaure", "Supersaurus"]
    },
    {
      id: 9,
      question: "Quelle est la plus grande île du monde?",
      good: "Groenland",
      bads: ["Madagascar", "Borneo", "Sumatra"]
    },
    {
      id: 10,
      question: "Quelle est la forme générale d'une équation du second degré?",
      good: "y = ax^2 + bx + c",
      bads: ["y = ax + b", "y = a/x + b", "y = a^x + b"]
    },
    {
      id: 11,
      question: "Quelle est la définition de la dérivée d'une fonction?",
      good: "la pente de la tangente à la courbe représentative de la fonction en un point donné ",
      bads: ["la différence entre deux valeurs de la fonction", "la somme des valeurs de la fonction", "la valeur absolue de la fonction"]
    },
    {
      id: 12,
      question: "Qui est considéré comme le père de la philosophie occidentale?",
      good: "Socrate",
      bads: ["Confucius", "Lao-Tseu", "Platon"]
    },
    {
      id: 13,
      question: "Qui est l'auteur de 'Critique de la raison pure' ?",
      good: "Immanuel Kant",
      bads: ["René Descartes", "Friedrich Hegel", "Friedrich Nietzsche"]
    },
    {
      id: 14,
      question: "Quel est le sport olympique le plus ancien?",
      good: "Le pentathlon",
      bads: ["La natation", " Le hockey sur glace", "Le football"]
    },
    {
      id: 15,
      question: "Qui a été l'empereur romain qui a instauré le Christianisme comme religion d'Etat?",
      good: "Constantin",
      bads: ["Jules César", "Néron", "Auguste"]
    },
    {
      id: 16,
      question: "Quelle est la date de la prise de la Bastille?",
      good: "14 juillet 1789",
      bads: ["14 juillet 1799", "14 juillet 1814", "14 juillet 1804"]
    },

    
  ]
  constructor(req) {
    this.id = id 
    this.questionCommu = req.body.questionCommu
    this.questionCommuGood = req.body.questionCommuGood
    this.questionCommuBad = [
      req.body.questionCommuBad1,
      req.body.questionCommuBad2,
      req.body.questionCommuBad3,
    ]
    isVerified = false
  }

  getRandomQuestion() {
    console.log('getRandomQuestiongetRandomQuestiongetRandomQuestiongetRandomQuestion')
    let index = Math.floor(Math.random() * this.questions.length)
    console.log(index)
    // console.log(this.questions[index])
    // console.log(this.questions.splice(this.questions[index], 1))
    return this.questions.splice(index, 1)[0]
  }
}