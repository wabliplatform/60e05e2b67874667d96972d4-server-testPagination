
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cardSchema = new Schema({
Underscoreid:String , 

cardText:String , 

cardDescription:String 


})

module.exports = {
  Card : mongoose.model('Card', cardSchema),
}

