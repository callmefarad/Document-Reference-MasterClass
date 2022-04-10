const mongoose = require( 'mongoose' );
const url = 'mongodb://localhost:27017/masterClass';

mongoose
    .connect( url )
    .then( () => {
        console.log('Connected Successfully');
    })
    .catch( ( error ) => {
    console.log(error.message)
})