
module.exports = (sequelize, DataTypes) => {
    const PermitBus = sequelize.define("busPermit", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        
    })

    

    return PermitBus;
}