'use strict';

let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let UserSchema = Schema({
  firstName: {
    type: String,
    trim: true,
    required: true
  },
  lastName: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true
  },
  contactNo: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  lockStatus: {
    type: Boolean,
    default: false
  },
  lockCounter: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

let mstUser = mongoose.model('mstUser',UserSchema);

module.exports = {
  mstUser : mstUser
}
