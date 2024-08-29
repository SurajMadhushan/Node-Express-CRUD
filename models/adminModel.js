

module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define("admin", {
        adminId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        adminName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        passWord: {
            type: DataTypes.STRING,
            allowNull: false

        }


    })

    return Admin;
}