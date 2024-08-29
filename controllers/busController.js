const { UniqueConstraintError, ForeignKeyConstraintError } = require("sequelize");
const db = require("../models");

const Bus = db.buses;

//crud

//  create a bus

const addBus = async (req, res) => {
    let busInfo = {
    busName: req.body.busName,
    busRegNumber: req.body.busRegNumber,
    adminId: req.body.adminId,
    };

    try {
        const bus = await Bus.create(busInfo);
        res.status(200).send(bus);
    } catch (error) {

        
        
        
        if(error.name == "SequelizeForeignKeyConstraintError"){
            console.log("foreign key constraint");
            
        }
        // Check if the error is a Sequelize UniqueConstraintError
        else if (UniqueConstraintError) {
            console.log("Duplicate email error");
            res.send('Duplicate');
            return;
        } else {
            console.log("An error occurred:");
            return;
        }
    }
};

module.exports = {
    addBus,
};
