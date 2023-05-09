import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { sequelize} from './db/db.js';
import { teachers } from './models/teacher.js';
import { trainings } from './models/training.js';
import { users } from './models/users.js';
import { shopping } from './models/shopping.js';

const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(cookieParser());


(async function seqSync(){
  try {
    sequelize
      .sync({force:false})
      .then(() => {
        console.log('Postgres sync has been established successfully.')
      })
  } catch (error) {
    console.error('Unable to sync to the database:', error)
  }
})();
  
teachers.belongsToMany(users, { through: "teachers_users" });
users.belongsToMany(teachers, { through: "teachers_users" });

teachers.hasMany(trainings);
trainings.belongsTo(teachers);

trainings.belongsToMany(users, {through: "trainings_users" });
users.belongsToMany(trainings, {through: "trainings_users" });

users.hasMany(shopping);
shopping.belongsTo(users);

export default server;