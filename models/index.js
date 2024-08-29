console.log("index.js is running");


const dbConfig = require('../config/dbConfig.js');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect
    }

)

sequelize.authenticate()
.then(() => {
    console.log("Connected...");
})
.catch(err => {console.log("Error occured: " + err);
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


//----model initialize
db.admins = require('./adminModel.js')(sequelize, DataTypes);
db.buses = require('./busModel.js')(sequelize, DataTypes);
db.permitBus = require('./permit_bus.js')(sequelize,DataTypes);
db.permits = require('./permitModel.js')(sequelize, DataTypes);


db.sequelize.sync({ force: false })
.then(() => {
    console.log("Resync done...");
    
});


//--------table relations
// -------- Admin == Bus
db.admins.hasMany(db.buses, {
    foreignKey: 'adminId',
    as: 'bus'
})

db.buses.belongsTo(db.admins, {
    foreignKey: 'adminId',
    as: 'admin'
})


// -- bus == permit many to many
db.buses.hasMany(db.permitBus, {
    foreignKey: 'busId',
    as: 'permitBus'
})

db.permitBus.belongsTo(db.buses, {
    foreignKey: 'busId',
    as: 'bus'
})


db.permits.hasMany(db.permitBus, {
    foreignKey: 'permitId',
    as: 'permitBus'
})

db.permitBus.belongsTo(db.permits, {
    foreignKey: 'permitId',
    as: 'permit'
})


module.exports = db;