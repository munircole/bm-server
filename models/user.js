const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const schemaCleaner = require('../utils/schemaCleaner');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  
  username: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    minlength: 7,
    required: true,
    trim: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  contactNumber: {
    type: String,
    minlength: 10,
    required: true,
    trim: true,
    unique: true,
  },

  gender: {
    type: String,
    required: true,
    trim: true,
  },

  institutionType: {
    type: String,
    required: true,
    trim: true,
  },
  institutionName: {
    type: String,
    required: true,
    trim: true,
  },
  department: {
    type: String,
    required: true,
    trim: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  role: { type: String, default: 'user' },
  questions: [
    {
      quesId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
      rep: { type: Number, default: 0 },
    },
  ],
  answers: [
    {
      ansId: { type: mongoose.Schema.Types.ObjectId, ref: 'Answer' },
      rep: { type: Number, default: 0 },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.plugin(uniqueValidator);
schemaCleaner(userSchema);

module.exports = mongoose.model('User', userSchema);
