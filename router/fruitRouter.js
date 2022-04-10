const express = require( 'express' );
const router = express.Router();

const { createFruit, allFruits, singleFruit, updateFruit, deleteFruit } = require( '../controller/fruitsController' )

router
    .route( '/people/:peopleId/fruit' )
    .get( allFruits )
    .post( createFruit )
    
router
    .route( '/people/:peopleId/fruit/:fruitId' )
    .get( singleFruit )
    .delete( deleteFruit )
    .patch( updateFruit )
    

module.exports = router



