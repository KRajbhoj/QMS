'use strict';

const mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  bcrypt = require('bcrypt'),
  q = require('q');

let validateJsonSchema = require('./userValidator');
let userModel = require('./userModel');
let User = userModel.mstUser;

class UserClass {
  constructor(userData) {
    this.userInfo = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      userName: userData.userName,
      email: userData.email,
      contactNo: userData.contactNo,
      password: userData.password
    }
  }


  doesEmailExists() {
    let deferred = q.defer();
    User.find().or([{
        email: this.userInfo.email,
      }, {
        contactNo: this.userInfo.contactNo
      }])
      .then(users => {
        if (users.length > 0) {
          deferred.reject({
            'status': 'fail',
            'message': 'EmailId or Contactno already exists'
          })
        } else {
          deferred.resolve();
        }
      })
      .catch(error => {
        deferred.reject(error);
      })
    return deferred.promise
  }

  createUser() {
    let deferred = q.defer();
    this.userInfo.password = bcrypt.hashSync(this.userInfo.password, 10);
    let newUser = new User(this.userInfo);
    this.doesEmailExists()
      .then(function(emailRespo) {
        newUser.save(function(err, user) {
          if (err) {
            if (err.code == 11000) {
              deferred.reject({
                status: 'fail',
                message: 'Email id / Contact no. already exists12',
              });
            } else {
              deferred.reject(err)
            }
          } else {
            deferred.resolve({
              'status': 'success',
              'message': 'Record inserted Successfully'
            });
          }
        });
      })
      .catch(function(error) {
        deferred.reject(error);
      })
    return deferred.promise
  }



}

let registerUser = function(req, res) {
  validateJsonSchema.createUser(req.body.data)
    .then((somthng) => {
      var newUser = new UserClass(req.body.data);
      return newUser.createUser();
    })
    .then((createUserResp) => {
      res.status(200).send(createUserResp)
    })
    .catch((error) => {
      if (error && error.status && error.status.toLowerCase() == 'fail') {
        res.status(200).send(error);
      } else {
        res.status(500).send({
          status: 'fail',
          message: 'Internal Structure Failed',
          data: {},
          error: []
        });
      }
    })
}

module.exports = {
  registerUser: registerUser
}
