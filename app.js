const express = require('express');
let cors = require('cors')
const Game = require('./models/Game');
const app = express()
const http = require('http').Server(app);
// const io = require('socket.io')(http)
const { Server } = require("socket.io");

const io = new Server(http, {
	cors: {
		origin: "*"
	}
});

const { UserController } = require("./controllers/User")

const Player = require('./models/Player');
const Questions = require('./models/Questions');
const port = process.env.PORT || 3000



let game = new Game()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.get('/game', (req, res) => {
	res.sendFile(__dirname + '/public/pages/game.html')
})

app.get('/admin', (req, res) => {
	res.sendFile(__dirname + '/public/pages/admin.html')
})

app.get('/register', (req, res) => {
	res.sendFile(__dirname + '/public/pages/register.html')
})

app.post('/register', (req, res) => {
	res.send(new UserController(req).addUser())
})


app.get('/game/reset', (req, res) => {
	clearInterval(game.setIntervalId)
	game = new Game()
	console.log(game)
	res.send('game reset')
	io.emit('instruction', { task: 'REDIRECT', to: '' })
})

app.get('/game/start', (req, res) => {
	if (!game) return res.send({ success: false })

	// for dev only
	game.players.push(new Player("p1"))
	game.players.push(new Player("p2"))
	game.players.push(new Player("p3"))
	game.players.push(new Player("p4"))
	game.players.push(new Player("p5"))
	game.players.push(new Player("p6"))
	// for dev only

  // start game
  game.isStarted = true
  res.send({ success: true })
  console.log('start game ?')
  io.emit('start game', {
    players: game.players
  })

	setTimeout(() => {
		io.emit('question', game.question())

		game.setIntervalId = setInterval(() => {
			game.resetAnswerState()
			io.emit('question', game.question())
		}, game.answerDelta)
	}, 3000)

})

app.post('/player', (req, res) => {
	let player = new Player(req.body.playername)
	if (!game) return res.send({ success: false })
	if (game.players.find(gamePlayer => gamePlayer.playername === player.playername)) return res.send({ success: false })
	game.players.push(player)
	console.log(game.players)
	res.send({
		success: true,
		playerId: player.id
	})
	console.log('user add to loobby')
})

app.post('/questioncommu', (req, res) => {
  // const { question, good, bads } = req.body;
  // const newQuestion = {
  //   id: Questions.length + 1,
  //   question,
  //   good,
  //   bads
  // };
  // Questions.push(newQuestion);
  // console.log(Questions);
  // res.send("Question ajoutée avec succès");


  console.log(req.body);


//   let question = new Questions(req.body)
//   const newQuestion = {
//     id: Questions.length + 1,
//     questionCommu,
//     questionCommuGood,
//     [questionCommuBad1, questionCommuBad2, questionCommuBad3],
//   };

})

http.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

io.on('connection', (socket) => {
	console.log('connection')

	socket.on('join', msg => {
		console.log('-----------join------------')
		if (!game) return
		if (game.isStarted) return
		let player = game.players.find(player => player.id === msg.playerId)
		if (!player) return io.emit('instruction', { task: 'REDIRECT', to: '' })
		if (player.socketId) return io.emit('instruction', { task: 'REDIRECT', to: '' })
		player.socketId = socket.id
		io.emit('update lobby', {
			players: game.players
		});

		socket.on('chat', msg => {
			io.emit('chat', msg);
		});
	});

	socket.on("disconnect", (reason) => {
		console.log('-----------deco------------')
		let player = game.players.find(player => player.socketId === socket.id)
		if (!player) return
		if (player) player.socketId = null
		io.emit('update lobby', {
			players: game.players.filter(player => player.socketId)
		});
	});

	socket.on("answer", msg => {
		let doIEmit = game.verifyAnswer(msg)

		if (doIEmit) { // bonne rep
			socket.emit('answer result', {
				isGood: true,
				respTxt: msg.answer
			})
		} else { // mauvaise rep
			socket.emit('answer result', {
				isGood: false,
				respTxt: msg.answer
			})
		}
		if (doIEmit) {
			if (game.verifyFinish()) {
				clearInterval(game.setIntervalId)
				io.emit('game end', {
					players: game.players,
					winner: game.getWinner()
				})
				game = new Game()
			}
		}
		io.emit('update players', {
			players: game.players
		})

	});
});

