//------import controllers

const adminController = require('../controllers/adminController.js');

//router

const router  = require('express').Router();

// use router

router.post('/addAdmin', adminController.addAdmin);
router.get('/getAllAdmins', adminController.getAllAdmins);
router.get('/getById/:id', adminController.getById);
router.delete('/deleteAdmin/:id', adminController.deleteAdmin);
router.put('/updateAdmin/:id', adminController.updateAdmin);


module.exports = router;