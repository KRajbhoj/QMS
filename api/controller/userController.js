let validateJsonSchema = require('../validator/userValidator');
let models = require('../model');
let userService = require('../service/userService');
//let User = userModel.mstUser;
let enums = require("../../config/enum");
let dbHandler = require("../utility/dbHandler");
let utility = require("../utility/util");

function UserController()
{
  this.registerUser = function(req, res)
  {
      let response;
      validateJsonSchema.createUser(req.body)
      .then((somthng) => {
        return userService.insertUser(req.body.data);
      })
      .then((createUserResp) => {
        response = utility.setSuccessResponse(200, "Success", createUserResp);
        res.send(response);
      })
      .catch((error) => {
          response = utility.serErrorResponse(400, "Error", error);
          res.status(500).send(response);
      })
  }

  this.updateUser = function(req, res)
  {

  }

  this.deleteUser = function(req, res)
  {
    
  }

  this.getAllUsers = function(req, res)
  {
    var response;

    return userService.getAllUsers()
      .then(result => {
        response = utility.setSuccessResponse(200, "Success", result);
        res.send(response);
      })
      .catch(err => {
        response = utility.serErrorResponse(400, "Error", err);
        res.status(500).send(response);
      });
  }

  this.getUser = function(req, res)
  {

  }
}

module.exports = new UserController();