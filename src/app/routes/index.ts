import express from 'express';
const router = express.Router();

/** @desc Landing Page / 
 *  @route GET /
*/
router.get('/', (req, res) => {
    res.send('Welcome TODO App');
});

export = router;