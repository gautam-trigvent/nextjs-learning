
/**
 * @swagger
 * /api/v1/category:
 *   get:
 *     summary: Get a list of category
 *     description: Retrieve a list of category from the database.
 *     tags:
 *        - Category Operations
 *     responses:
 *       '200':
 *         description: A successful response with the list of categories.
 *         content:
 *           application/json:
 *             example:
 *               data: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }]
 *       '500':
 *         description: Internal server error.
 */

 /**
 * @swagger
 * /api/v1/category:
 *   post:
 *     summary: Post a new category
 *     description: Create new resource.
 *     tags:
 *        - Category Operations
 *     responses:
 *       '200':
 *         description: A successful response with the list of categories.
 *         content:
 *           application/json:
 *             example:
 *               data: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }]
 *       '500':
 *         description: Internal server error.
 */

/**
 * @swagger
 * /api/v1/category/{id}:
 *   get:
 *     summary: Get details of specific category
 *     description: Retrieve a list of category from the database.
 *     tags:
 *        - Category Operations
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: A successful response with the list of categories.
 *         content:
 *           application/json:
 *             example:
 *               data: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }]
 *       '500':
 *         description: Internal server error.
 */

 /**
 * @swagger
 * /api/v1/category/{id}:
 *   put:
 *     summary: Update all details of specific category
 *     description: Create new resource.
 *     tags:
 *        - Category Operations
 *     parameters:
 *       - in: path
 *         name: dynamicParameter
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: A successful response with the list of categories.
 *         content:
 *           application/json:
 *             example:
 *               data: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }]
 *       '500':
 *         description: Internal server error.
 */

 /**
 * @swagger
 * /api/v1/category/{id}:
 *   delete:
 *     summary: Delete details of specific category
 *     description: Create new resource.
 *     tags:
 *        - Category Operations
 *     parameters:
 *       - in: path
 *         name: dynamicParameter
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: A successful response with the list of categories.
 *         content:
 *           application/json:
 *             example:
 *               data: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }]
 *       '500':
 *         description: Internal server error.
 */

 /**
 * @swagger
 * /api/v1/category/{id}:
 *   patch:
 *     summary: Update single detail of specific category
 *     description: Create new resource.
 *     tags:
 *        - Category Operations
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: A successful response with the list of categories.
 *         content:
 *           application/json:
 *             example:
 *               data: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }]
 *       '500':
 *         description: Internal server error.
 */

 /**
 * @openapi
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 */