const express = require('express');
const { InfoController, TicketController } = require('../../controllers');
const router = express.Router();

/**
 * @swagger
 * /info:
 *   get:
 *     summary: Get information
 *     tags:
 *       - Info
 *     responses:
 *       200:
 *         description: Returns info data
 */
router.get('/info', InfoController.info);

/**
 * @swagger
 * /ticket:
 *   post:
 *     summary: Create a ticket
 *     tags:
 *       - Ticket
 *     requestBody:
 *       description: Ticket details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               flightId:
 *                 type: string
 *               passengerName:
 *                 type: string
 *               seatNumber:
 *                 type: string
 *             required:
 *               - flightId
 *               - passengerName
 *     responses:
 *       201:
 *         description: Ticket created successfully
 *       400:
 *         description: Bad request
 */
router.post('/ticket', TicketController.create);

module.exports = router;
