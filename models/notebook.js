const mongoose = require('mongoose')
const {
  Schema
} = mongoose;

const notebookSchema = new Schema({
  calendar: Number,
  planner: String,
  diary: String,
  list: Array,
  task: Boolean

})


const Notebook = mongoose.model('Notebook', notebookSchema);

module.exports = Notebook;

