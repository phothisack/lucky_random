/**
 * @swagger
 *
 * /submits/add:
 *   post:
 *     tags:
 *       - submit manage
 *     description: submit application
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 example: "firstname"
 *               lastname:
 *                 type: string
 *                 example: "lastname"
 *               village:
 *                 type: string
 *                 example: "village"
 *               district:
 *                 type: string
 *                 example: "village"
 *               province:
 *                 type: string
 *                 example: "village"
 *               phone:
 *                 type: integer
 *                 example: 1234678
 *               bil_number:
 *                 type: string
 *                 example: "village"
 *               bil_price:
 *                 type: string
 *                 example: "village"          
 *               period:
 *                 type: integer
 *                 example: 45
 *               purchase_date:
 *                 type: string
 *                 example: "12-12-22"
 *               user_id:
 *                 type: integer
 *                 example: 1
 * /submits/:
 *   get:
 *     tags:
 *       - submit manage
 *     description: list submission 
 *     produces:
 *       - application/json              
 * /users/:
 *   get:
 *     tags:
 *       - user manage
 *     description: list users 
 *     produces:
 *       - application/json    
 *              
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *            application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        status:
 *                            type: integer
 *                            example: 200
 *                        data:
 *                            type: array
 *                            items:
 *                              type: object
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 *      
 */
 
 


