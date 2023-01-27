module.exports = class Game {
  players = []
  isStarted = false
  submitedQuestions = []
  answerDelta = 10000
  constructor() {
  }

  start() {
    // remove afk players
    this.players = this.players.filter(player => player.socketId)
  }

  question(){

  }
}