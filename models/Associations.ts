import Book from './Book';
import Autor from './Autor';

Book.belongsToMany(Autor, { as:'Autor', through: 'BookAuthors', foreignKey:'id', sourceKey:'id' });
Autor.belongsToMany(Book, { as:'Book', through: 'BookAuthors', foreignKey:'id', sourceKey:'id' });