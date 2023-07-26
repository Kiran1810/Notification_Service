const express = require('express');



const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const app = express();



app.use(express.json());
app.use(express.urlencoded({extended: true}));





app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});

/**
 * user
 *  |
 *  v
 * localhost:3001 (API Gateway) localhost:4000/api/v1/bookings
 *  |
 *  v
 * localhost:3000/api/v1/flights
 */