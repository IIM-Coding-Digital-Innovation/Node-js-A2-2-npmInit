const { v4: uuidv4 } = require('uuid');

module.exports = class Player {
  socketId = null
  hp = 100
  constructor(playername) {
    this.playername = playername
    this.id = uuidv4();
  }
}