
module.exports = (sequelize, DataTypes) => {
    const Bus = sequelize.define("bus", {
        busId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        busName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        busRegNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,

            validate: {
                notEmpty: {
                    msg: "busRegNumber cannot be an empty string",
                },
            },
            
        }


    })

    return Bus;
}