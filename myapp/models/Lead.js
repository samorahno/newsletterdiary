'use-strict';
module.exports = (sequelize, DataTypes) => {
    var Lead = sequelize.define('Lead', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    });

    return Lead;
}