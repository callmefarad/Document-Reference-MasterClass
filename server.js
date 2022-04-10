require('./config/db')
const express = require( 'express' );
const port = 5000;
const fruitRouter = require('./router/fruitRouter')
const peopleRouter = require('./router/peopleRoute')

const app = express();
app.use(express.json())
app.get( '/', (req, res)=> {
    res.send('Master Class API')
})
app.use('/api', fruitRouter)
app.use('/api', peopleRouter)
app.listen( port, () => {
    console.log(`App is connected to ${port}`);
})
