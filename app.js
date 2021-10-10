const express = require ('express')
const exphbs = require ('express-handlebars')
const bodyParser = require ('body-parser')
const port = 3000
const app = express ()
const usersModel = require ('./models/user')

require ('./config/mongoose')


app.engine ('hbs', exphbs({extname:"hbs", defaultLayout:'main'}))
app.set ('view engine', 'hbs')

app.use (express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))


app.get ('/', (req,res) => {
  res.render (`index`)
})

app.post ('/', (req,res) => {
  const account = req.body.email
  const password = req.body.password

  usersModel.find({account,password})
    .lean()
    .then( (user) => {
      if (user.length === 1){
        res.render ('frontPage',{firstName: user[0].firstName})
      }else if (user.length === 0){
        res.render ('index', {account,password})
      }
    })
})


app.listen (port, ()=> {
  console.log (`Login page is running on http://localhost:${port}`)
})