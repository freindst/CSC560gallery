const express = require('express');
let router = express.Router();

const photo_controller = require('../controllers/photoController');


/*  "/api/status"
 *   GET: Get server status
 *   PS: it's just an example, not mandatory
 */
router.get("/status", function (req, res) {
    res.status(200).json({ status: "UP" });
});

router.get('/list', photo_controller.photo_list);

router.get('/:id', photo_controller.photo_detail);

router.post('/create', photo_controller.photo_create);

router.put('/update/:id', photo_controller.photo_update);

router.delete('/delete/:id', photo_controller.photo_delete);

module.exports = router;
