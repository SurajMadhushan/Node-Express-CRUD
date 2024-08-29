//import controller
const busController = require('../controllers/busController.js');

//declare router
const router = require('express').Router();

//add routers
router.post('/addBus', busController.addBus);

module.exports = router;