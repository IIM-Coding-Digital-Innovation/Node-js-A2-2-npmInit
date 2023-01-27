const { v4: uuidv4 } = require('uuid');

module.exports = class Player {
  socketId = null
  hp = 100
  answerState = null // null/false => pas encore rep/ mal rep     true=> bien rep
  constructor(playername) {
    this.playername = playername
    this.id = uuidv4();
  }
}