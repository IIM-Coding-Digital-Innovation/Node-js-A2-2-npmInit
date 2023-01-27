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
      bads: ["Rousseau", "Shakespeare", "Victor Hugo"]
    },
  ]
  constructor() {
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