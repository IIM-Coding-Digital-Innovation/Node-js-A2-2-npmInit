module.exports = class Questions {
  questions = [
    {
      id: 1,
      question: "La bonne rep c'est 3",
      good: "celle-ci",
      bad: ["nop", "non plus", "encore moins"]
    },
    {
      id: 2,
      question: "2La bonne rep c'est 3",
      good: "2celle-ci",
      bad: ["2nop", "2non plus", "2encore moins"]
    },
    {
      id: 3,
      question: "3La bonne rep c'est 3",
      good: "3celle-ci",
      bad: ["3nop", "3non plus", "3encore moins"]
    }
  ]
  constructor() {
  }

  getRandomQuestion() {
    return this.questions.splice(this.questions[Math.floor(Math.random() * this.questions.length) + 1], 1)[0]
  }
}