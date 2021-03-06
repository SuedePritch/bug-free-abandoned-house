const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPass) {
        return bcrypt.compareSync(loginPass, this.password);
    }
}

User.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: true
        } 
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
        validate: {
            isEmail:true
        } 
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len :[8,26],
        }  
    },
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            async beforeUpdate (updateUserData) {
                updateUserData.password = await bcrypt.hash(updateUserData.password, 10);
                return updateUserData;
            }
        },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
    }
);

module.exports = User;

