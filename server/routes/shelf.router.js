const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "item";`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows)
            console.log('result.rows:', result.rows);
        }).catch((error) => {
            console.log('Something went wrong in GET shelf', error);
            res.sendStatus(500);
        })
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/items', (req, res, next) => {
    const queryText = `INSERT INTO "item" ("description", "image_url", "person_id") VALUES ($1, $2, $3);`;
    pool.query(queryText, [req.body.description, req.body.image_url, req.body.person_id])
        .then(() => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('Something went wrong in post', err);
            
            next(err);
        });
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    const queryText = `DELETE FROM "item" WHERE "id"=$1;`;
    pool.query(queryText, [req.params.id])
        .then(() => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(`Problem with deleting items: ${error}`);
            res.sendStatus(500);
        });
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;