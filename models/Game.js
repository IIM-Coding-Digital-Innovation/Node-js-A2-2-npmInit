const Questions = require('./Questions')

module.exports = class Game {
  players = []
  isStarted = false
  questions = new Questions()
  submitedQuestions = []
  answerDelta = 10000
  setIntervalId;
  constructor() {
  }

  start() {
    // remove afk players
    this.players = this.players.filter(player => player.socketId)
  }

  question(){
    let question = this.questions.getRandomQuestion()
    if(!question) return
    this.submitedQuestions.push(question)
    let answers = question.bads
    answers.push(question.good)
    let shuffledArray = answers.sort((a, b) => 0.5 - Math.random())
    return {
      id: question.id,
      question: question.question,
      answers: shuffledArray
    }
  }

  verifyAnswer(answer) {
    let player = this.players.find(player => player.id === answer.playerId)
    if(!player) return false
    if(player.answerState !== null) return
    let question = this.submitedQuestions[this.submitedQuestions.length - 1]
    let answers = question.bads
    answers.push(question.good)
    if(!answers.includes(answer.answer)) return
    if(question.good === answer.answer) {
      console.log('reponse ok')
      player.answerState = true
      this.inflictDamages()
      return true
    }
    else player.answerState = false
    console.log('reponse demerde')
    return false
  }

  inflictDamages() {
    let targets = this.players.filter(player => player.answerState !== true)
    let damages;
    switch(this.players.filter(player => player.answerState === true).length) {
      case 1: damages = 10; break;
      case 2: damages = 5; break;
      case 3: damages = 3; break;
      default: damages = 0
    }
    targets.forEach(target => {
      target.hp -= damages
    })
  }

  resetAnswerState() {
    this.players.forEach(player => player.answerState = null)
  }
  
  verifyFinish() {
    return this.players.filter(player => player.hp > 0).length <= 1
  }

  getWinner() {
    return this.players.find(player => player.hp > 0)
  }
}