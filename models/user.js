const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  firstName : {
    type:String, 
    required: true
  },
  account: {
    type : String, 
    required: true
  }, 
  password: {
    type: String, 
    requried: true
  }
})

module.exports = mongoose.model ('Users', urlSchema)