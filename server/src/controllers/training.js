import { trainings } from "../models/training";

export const getAllTraining = async (req, res) => {
  try {
    const training = await trainings.findAll();
    res.json(training);
  } catch (error) {
    res.send({ message: error.message });
  }
};

export const postTraining = async (req, res) => {
  let { name, initialDate, finalDate, teacherID } = req.body;
  try {
    await products.create({
      name,
      initialDate,
      finalDate,
      teacherID,
    });
    res.json("Training was created successfully");
  } catch (error) {
    res.send({ message: error.message });
  }
};
