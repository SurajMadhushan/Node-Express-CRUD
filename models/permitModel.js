


module.exports = (sequelize, DataTypes) => {
    const Permit = sequelize.define("permit", {
        permitId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },


        permitNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,

            validate: {
                notEmpty: {
                },
            },
        },

        issuedDate:{
            type: DataTypes.DATE

        },

        status: {
            type: DataTypes.BOOLEAN
        }


    })

    return Permit;
}