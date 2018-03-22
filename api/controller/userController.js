let validateJsonSchema = require('../validator/userValidator');
let userModel = require('../model/userModel');
let User = userModel.mstUser;
let enums = require("../../config/enum");
let dbHandler = require("../utility/dbHandler");
let utility = require("../utility/util");

function UserController()
{
  this.registerUser(req, res)
  {
      let response;
      validateJsonSchema.createUser(req.body)
      .then((somthng) => {
        return dbHandler.callDb(enums.INSERT, User, req.body.data, {}, {});
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

  this.updateUser(req, res)
  {

  }

  this.deleteUser(req, res)
  {
    
  }

  this.getAllUsers(req, res)
  {

  }

  this.getUser(req, res)
  {

  }
}

module.exports = new UserController();