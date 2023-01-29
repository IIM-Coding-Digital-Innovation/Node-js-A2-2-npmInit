# Node.js App using node.js - websocket - express - cors


This project which aims to allow us to learn node.js, express, cors, Websocket.\
The concept of this application imagined by us (with the help of [Yanis El Said](https://www.behance.net/yaniselsaid "Yanis El Said")) is a battle royale of general knowledge.\
Responding early allows you to remove life points from opponents while protecting yourself.\
A new question comes up on a regular basis and the last one alive wins the game.

## Setup

### To run this project locally, you need to install the following packages:
\
[![Node.js](https://img.shields.io/badge/node.js->=19.0.0-succes)](https://nodejs.org/en/)
[![npm](https://img.shields.io/badge/npm->=8.0.0-red)](https://docs.npmjs.com/cli/v9/commands/npm-version?v=true)
[![mongodb](https://img.shields.io/badge/mongodb->=6.0.0-success)](https://www.mongodb.com/docs/manual/installation/)
\
\
Install the project using the following command:
```bash
git clone https://github.com/IIM-Creative-Technology/Node-js-A2-2-npmInit.git
```

Enter project folder:
```bash
cd Node-js-A2-2-npmInit/
```

Install the dependancies:
```bash 
npm i
```

### Run project:
```bash 
node app.js
```
Note: the front-end/ folder allows you to test the app as if you were fetching the api from an other location, it's just an example and may not be complete, to access the full app, use the :3000 port instead.

## How to play
1) Go to http://127.0.0.1:3000
2) Enter your player name and enter lobby
3) When everyone is in the lobby, go to http://127.0.0.1:3000/admin, click start to run the game.
4) Enjoy

Note: the end of the game is not coded yet.

## Last reminder
You can register to post questions who can be used later to create quiz

## API Reference

#### Register user

```
  POST /register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `pseudo` | `string` | **Required**. Your pseudo | 
| `mail` | `string` | **Required**. Your mail | 
| `password` | `string` | **Required**. Your password | 
| `confPassword` | `string` | **Required**. The confirmation of your password | 

```
  POST /login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `mail` | `string` | **Required**. Your mail | 
| `password` | `string` | **Required**. password | 

## Authors

- [@AznTufu](https://www.github.com/AznTufu)
- [@charles-chrismann](https://www.github.com/charles-chrismann)
- [@Romain-Parisot](https://www.github.com/Romain-Parisot)
- [@tom-tamen](https://www.github.com/tom-tamen)