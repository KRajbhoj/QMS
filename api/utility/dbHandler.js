//const mongoose = require('mongoose');

function DBHandler()
{
    this.callDb = function(queryType, model,  data, whereCondition, options)
    {
        switch(queryType)
        {
            case 'insert' :  return insertData(model,  data, whereCondition, options);
                             break;
            case 'update' :  return updateData(model,  data, whereCondition, options);
                             break;
            case 'delete' :  return deleteData(model,  data, whereCondition, options);
                             break;
            case 'findOne' : return findOne(model,  data, whereCondition, options);
                             break;
            case 'findAll' : return findAll(model,  data, whereCondition, options);
                             break;
        }
    }

    let insertData = function(model,  data, whereCondition, options)
    {
        return model.create(data);
    }

    let updateData = function(model, data, whereCondition, options)
    {
        return model.update(whereCondition, { $set: data });
    }

    let deleteData = function(model,  data, whereCondition, options)
    {
        return model.update(whereCondition, { $set: data });
    }

    let findOne = function(model,  data, whereCondition, options)
    {
        return model.findOne(whereCondition);
    }

    let findAll = function(model,  data, whereCondition, options)
    {
        return model.findAll(whereCondition);
    }
}

module.exports = new DBHandler();