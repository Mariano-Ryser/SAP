const express = require('express');
const router = express.Router();
const worteController = require('../controllers/worte');

router.get('/', worteController.getWortes);
router.post('/', worteController.createWorte);
router.delete('/:id', worteController.deleteWorte);
router.patch('/:id/like', worteController.likeWorte);

module.exports = router;