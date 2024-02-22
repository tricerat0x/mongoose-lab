const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// Use router.get instead of app.get
router.get('/', (req, res) => {
    res.render('flights')
});

router.get('/all', flightsCtrl.index);
router.get('/new', flightsCtrl.newFlight);
router.post('/new', flightsCtrl.create);

module.exports = router;
