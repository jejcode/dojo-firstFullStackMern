// import Person model
const Person = require('../models/person.model')
module.exports.index = (request, response) => {
    // export a key:val pair of index : function
    response.json({
        // Set the API's response to the requesting client
        message: 'Hello World'
    })
}

module.exports.createPerson = (request, response) => {
    // Mongoose's  "create" method will add a new person to the db's person collection
    // request.body format: {firstName: 'name', lastName: 'other name'} from client
    Person.create(request.body)
        .then(person => response.json(person))
        .catch(err => response.json(err))
}
// added for part 2 of the assignment
module.exports.getAllPeople = (request, response) => {
    Person.find({})
        .then(persons => {
            console.log(persons)
            response.json(persons)
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

module.exports.getPerson = (request,response) => {
    Person.findOne({_id: request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}

module.exports.updatePerson = (request, response) => {
    Person.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then( updatedPerson => response.json(updatedPerson))
        .catch( err => response.json(err))
}

module.exports.deletePerson = (request, response) => {
    Person.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}