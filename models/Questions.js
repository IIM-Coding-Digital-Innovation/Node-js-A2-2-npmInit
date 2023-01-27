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
    }
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