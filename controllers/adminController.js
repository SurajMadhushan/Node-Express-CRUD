const { where } = require('sequelize');
const db = require('../models');


// call model
const Admin = db.admins;

//----crud operations

//-- 1.create


const addAdmin = async (req, res) => {
    let adminInfo = {
        
        adminName: req.body.adminName,
        userName: req.body.userName,
        passWord: req.body.passWord

    }

    console.log(adminInfo);
    try {
        const admin = await Admin.create(adminInfo);
        res.status(200).send(admin);  // Send the created admin back as a response
        console.log(admin);
    } catch (error) {
        console.error("Error creating admin:", error);
        res.status(500).send("Internal Server Error");
    }
}


//  02. Get all admins

const getAllAdmins = async (req, res) => {
    try{
    let allAdmins = await Admin.findAll({});
    res.status(200).send(allAdmins);
    }
    catch(err){
        console.log("Error in get: " + err);
        
    }
}

//   03. get by adminId

const getById = async (req, res) => {
    try {
        let id = req.params.id;
        console.log("id = " + id);
        
        let admin = await Admin.findOne({ where: { adminId: id }});
        res.status(200).send(admin);
        
    } catch (error) {
        console.log(error);
        
    }
    
}


// 04. delete

const deleteAdmin = async (req, res) => {
    let id = req.params.id;

    await Admin.destroy({ where: {adminId: id}});
    res.status(200).send(`admin deleted where id: ${id}`);
}


//  05: update

const updateAdmin = async (req, res) => {

    let id = req.params.id;
    const updatedAdmin = await Admin.update(req.body, { where: { AdminId: id }});
    res.status(200).send(updatedAdmin);
}

module.exports = {
    addAdmin,
    getAllAdmins,
    getById,
    deleteAdmin,
    updateAdmin
}