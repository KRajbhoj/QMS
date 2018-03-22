let setSuccessResponse = function(code, message, data)
{
    let obj = {
        "status" : "success",
        "code" : code,
        "message" : "Success",
        "data" : data 
    }

    return obj;
}

let serErrorResponse = function(code, message, data)
{
    let obj = {
        "status" : "fail",
        "code" : code,
        "message" : message,
        "data" : data
    }

    return obj;
}

module.exports = {
    setSuccessResponse : setSuccessResponse,
    serErrorResponse : serErrorResponse
}