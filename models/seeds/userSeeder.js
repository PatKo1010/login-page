const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

const userModel = require ('../user')
const db = require('../../config/mongoose')

db.once ('open', ()=> {
  for (let user of users){
    userModel.create({ firstName: user.firstName, account: user.email, password: user.password })
             .catch ((error) => {console.log (error)})
  }
  console.log ('done')
})