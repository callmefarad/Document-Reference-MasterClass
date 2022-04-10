const fruitModel = require( '../model/fruitsModel' )
const peopleModel = require( '../model/peopleModel')

// get all fruits
const allFruits = async ( req, res ) => {
    try {
        const id = req.params.peopleId
        const people = await peopleModel.findById( id ).populate( "pointer" )
        // console.log(people)
        res.status( 200 ).json( {
            data: people
        })
    } catch ( error ) {
        res.status( 500 ).json( {
            message: error.message
        })
    }
}

// create a fruits 
const createFruit = async ( req, res ) => {
    try {
        const id = req.params.peopleId
        const fruit = new fruitModel( req.body )
        const people = await peopleModel.findById( id )
        fruit.person = people

        await fruit.save()
        people.pointer.push( fruit )
        await people.save()

        res.status( 201 ).json( {
            data: fruit
        })
    
    } catch ( error ) {
        res.status( 500 ).json( {
            message: error.message
        })
    }
}

// get a fruits
const singleFruit = async ( req, res ) => {
    try {
        // const id = req.params.peopleId
        const fruitId = req.params.fruitId
        const fruit = await fruitModel.findById( fruitId )
        // console.log(people)
        res.status( 200 ).json( {
            data: fruit
        })
    } catch ( error ) {
        res.status( 500 ).json( {
            message: error.message
        })
    }
}
// update a fruits
const updateFruit = async ( req, res ) => {
    try {
        // const id = req.params.peopleId
        const fruitId = req.params.fruitId
        const fruit = await fruitModel.findByIdAndUpdate( fruitId, req.body, {new: true} )
        // console.log(people)
        res.status( 200 ).json( {
            data: fruit
        })
    } catch ( error ) {
        res.status( 500 ).json( {
            message: error.message
        })
    }
}
// delete a fruits
const deleteFruit = async ( req, res ) => {
    try {
        const personId = req.params.peopleId
        const fruitId = req.params.fruitId
        await fruitModel.findByIdAndDelete( fruitId )
        const person = await peopleModel.findById( personId )
        person.pointer.pull( fruitId )
        person.save()
        res.status( 200 ).json( {
            message: "fruit delete"
        })
    } catch ( error ) {
        res.status( 500 ).json( {
            message: error.message
        })
    }
}

module.exports = {
    allFruits,
    createFruit,
    singleFruit,
    updateFruit,
    deleteFruit
}