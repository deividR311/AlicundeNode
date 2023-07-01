import Sequelize from 'sequelize';
import dataBase from '../config/database';

// Model Author
let Author = dataBase.define('AdventuresQualifies', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false,
    }
});

// export Author model for use in other files.
export default Author;
