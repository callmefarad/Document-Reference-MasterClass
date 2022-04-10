const peopleModel = require( '../model/peopleModel' )


// create a fruits 
const people = async (req, res) => {
    try {
        const person = await peopleModel.create( req.body )
        res.status( 200 ).json( {
            data: person
        })
    } catch ( error ) {
        res.status( 500 ).json( {
            status: 500,
            message: error.message
        })
    }
}
// get all person 
const getPeople = async (req, res) => {
    try {
        const person = await peopleModel.find()
        res.status( 200 ).json( {
            data: person
        })
    } catch ( error ) {
        res.status( 500 ).json( {
            status: 500,
            message: error.message
        })
    }
}
// get a person 
const singlePeople = async (req, res) => {
    try {
        const id = req.params.peopleId
        const person = await peopleModel.findById(id)
        res.status( 200 ).json( {
            data: person
        })
    } catch ( error ) {
        res.status( 500 ).json( {
            status: 500,
            message: error.message
        })
    }
}
// update a person 
const updatePeople = async (req, res) => {
    try {
        const id = req.params.peopleId
        const person = await peopleModel.findByIdAndUpdate(id, req.body, {new: true})
        res.status( 200 ).json( {
            data: person
        })
    } catch ( error ) {
        res.status( 500 ).json( {
            status: 500,
            message: error.message
        })
    }
}
// delete a person 
const removePeople = async (req, res) => {
    try {
        const id = req.params.peopleId
        const person = await peopleModel.findByIdAndDelete(id)
        res.status( 200 ).json( {
            message: "deleted"
        })
    } catch ( error ) {
        res.status( 500 ).json( {
            status: 500,
            message: error.message
        })
    }
}

module.exports = {
    people,
    getPeople,
    singlePeople,
    removePeople,
    updatePeople
}