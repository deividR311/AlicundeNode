import Sequelize from 'sequelize';
import dataBase from '../config/database';

// Model Book
let Book = dataBase.define('Book', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING(2),
        allowNull: false,
    },
    chapters: {
        type: Sequelize.INTEGER
    },
    pages: {
        type: Sequelize.INTEGER
    }
});

// export User model for use in other files.
export default Book;

