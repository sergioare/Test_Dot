import { teachers } from "../../models/teacher.js";
import { trainings } from "../../models/training.js";

export const getTeacherById = async (req, res) => {
  const { id } = req.params;
  try {
    const getid = await teachers.findByPk(id, {
      include: trainings,
    });
    res.send(getid);
  } catch (error) {
    res.send(error);
  }
}

export const logicalDeletion = async (req, res) => {
  const { id } = req.params;
  try {
    const idExist = await teachers.findByPk(id);
    if (idExist.deleted === true) {
      res.send(`The ${id} is inactive`);
    } else {
      // search the id and delete it
      const deletion = await teachers.update(
        { deleted: true },
        {
          where: {
            id: id,
          },
        }
      );
      res.send(`Resource removed  id : ${id}`);
    }
  } catch (error) {
    res.send(error);
  }
};