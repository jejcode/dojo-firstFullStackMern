module.exports.index = (request, response) => {
    // export a key:val pair of index : function
    response.json({
        // Set the API's response to the requesting client
        message: 'Hello World'
    })
}