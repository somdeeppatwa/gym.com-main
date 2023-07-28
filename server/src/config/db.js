const mongoose = require("mongoose");
const connect = async () => {
  mongoose.set("strictQuery", false);
  return mongoose.connect('mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/gymapp?retryWrites=true&w=majority');
};
module.exports = connect;

