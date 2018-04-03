let models = require('../model');
//let User = userModel.mstUser;
let enums = require("../../config/enum");
let dbHandler = require("../utility/dbHandler");
let utility = require("../utility/util");

function UserService()
{
  this.insertUser = function(data)
  {
      return dbHandler.callDb(enums.INSERT, models.user, data, {}, {});
  }

  this.updateUser = function(req, res)
  {

  }

  this.deleteUser = function(req, res)
  {
    
  }

  this.getAllUsers = function()
  {
    return dbHandler.callDb(enums.FIND_ALL, models.user, {}, {}, {});
  }

  this.getUser = function(req, res)
  {

  }
}

module.exports = new UserService();