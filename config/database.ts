import { Sequelize } from "sequelize";

const dataBase = new Sequelize('b3qdicdbgjcrnfsptzoj', 'uz7ft17yaof7mrof', 'bvNyFY2vk97jT5XR4pz5', {
  host    : 'b3qdicdbgjcrnfsptzoj-mysql.services.clever-cloud.com',
  dialect : 'mysql',
  logging : false
});

dataBase.authenticate()
.then(() => { console.log('DataBase connection established'); })
.catch((err) => { console.log('DataBase connection failed', err); });

export default dataBase;