const express = require( 'express' );
const router = express.Router();
const {people, getPeople, singlePeople,updatePeople, removePeople} = require( '../controller/peopleController')

router
    .route( '/people' )
    .post( people )
    .get( getPeople )
router
    .route( '/people/:peopleId' )
    .get( singlePeople )
    .delete( removePeople )
    .patch(updatePeople)

module.exports = router