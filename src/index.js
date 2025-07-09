const express = require('express');



const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const app = express();
const setupSwagger = require('./swagger');


app.use(express.json());
app.use(express.urlencoded({extended: true}));





app.use('/api', apiRoutes);
setupSwagger(app);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    console.log(`📚 Swagger Docs available at: http://localhost:${ServerConfig.PORT}/api-docs`);
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