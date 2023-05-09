import { DataTypes } from "sequelize";
import {sequelize} from "../db/db.js";

export const trainings =
    // define the model
  sequelize.define(
    "training",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      initialDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      finalDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      }
    },
    {
      timestamps: false,
    }
  );

