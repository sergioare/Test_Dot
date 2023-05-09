import { DataTypes } from "sequelize";
import {sequelize} from "../db/db.js";

export const users =
  // define the model
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID, // don´t repeat in API
        defaultValue: DataTypes.UUIDV4, 
        allowNull: false,
        primaryKey: true,
      },
      name: {
        // user name
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING, //  user email
        allowNull: false,
      },
      deleted: {
        // user banned 
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      role: {
        type: DataTypes.ENUM,
        values: ["admin", "user"],
        defaultValue: "user",
      },
    }

  );

