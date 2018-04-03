'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    id : {
      type : DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true 
    },
    first_name: { 
      type: DataTypes.STRING 
    },
    last_name: { 
      type: DataTypes.STRING 
    },
    user_name: { 
      type: DataTypes.STRING 
    },
    password: { 
      type: DataTypes.STRING 
    },
    is_active: { 
      type: DataTypes.INTEGER 
    }
  }, {
    timestamps: false,
    underscored: true,
    tableName: "user"
  });

  // User.associate = function(models) {
  //   models.User.hasMany(models.Task);
  // };

  return User;
};
