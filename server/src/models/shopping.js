import { DataTypes } from "sequelize";
import {sequelize} from "../db/db.js";

export const shopping =
    // define the model
  sequelize.define(
    "shopping",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      training_added: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
    }  
  );

