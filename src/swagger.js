const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Flight Booking API',
      version: '1.0.0',
      description: 'API documentation for Flight Booking and Ticket services',
    },
    servers: [
      {
        url: 'http://localhost:3002/api',
      },
    ],
  },
  apis: ['./src/routes/v1/*.js'], 
};

const swaggerSpec = swaggerJsdoc(options);

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwagger;
