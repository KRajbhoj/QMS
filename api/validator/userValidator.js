const Validator = require('jsonschema').Validator;
const q = require('q');
const _ = require('underscore');



module.exports = {
  createUser: function(body) {
    var deferred = q.defer(),
      v = new Validator(),
      response = {},
      error = [];

    var createUserRequest = {
      id: '/createUserRequest',
      type: 'Object',
       properties: {
            data: {
                type: "object",
                 properties: {
                  firstName: {
                    type: "string",
                    required: true
                  },
                  lastName: {
                    type: "string",
                    required: true
                  },
                  userName: {
                    type: "string",
                    required: true
                  },
                  email: {
                    type: "string",
                    required: true
                  },
                  contactNo: {
                    type: "string",
                    required: true
                  },
                  password: {
                    type: "string",
                    required: true
                  }
                }
            }
       },
      additionalProperties: false
    }
    v.addSchema(createUserRequest, '/createUserRequest');
    var result = v.validate(body, createUserRequest);
    if (result.valid) {
      deferred.resolve(true);
    } else {
      error = _.map(_.pluck(result.errors, 'stack'), function(error) {
        return error.replace(/instance./, "")
      });
      response.status = 'fail';
      response.message = "Error generated";
      response.data = {};
      response.error = error;
      deferred.reject(response)
    }
    return deferred.promise;
  }
}
