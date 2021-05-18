import express from 'express';
const router = express.Router();

/** @desc Lists 
 *  @route GET /
*/
router.get('/', (req, res) => {
    res.send('Lists');
});

/** @desc Create New List
 *  @route POST /
*/
router.post('/', (req, res) => {
    res.send('Create New List');
});

/** @desc Show a List by id 
 *  @route GET /:id
*/
router.get('/:id', (req, res) => {
    res.send('Show a List');
});

/** @desc Update a List by id 
 *  @route PUT /:id
*/
router.put('/:id', (req, res) => {
    res.send('Update a List');
});

/** @desc Delete a List by id 
 *  @route DELETE /:id
*/
router.delete('/:id', (req, res) => {
    res.send('Delete a List');
});

export = router;