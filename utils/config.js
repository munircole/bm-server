require('dotenv').config();

let PORT = '5000';
let MONGODB_URI = "mongodb+srv://munir:yaxvCGNN8NsXlGmW@cluster0.asqpf.mongodb.net/BMate?retryWrites=true&w=majority";
let SECRET = "##MStar200";

module.exports = {
  PORT,
  MONGODB_URI,
  SECRET,
};
