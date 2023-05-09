import { shopping } from "../models/shopping";
import { trainings } from "../models/training";

export const postShoppingCart = async (req, res) => {
  let {training_added, initialDate,finalDate } = req.body;
  try{
  await shopping.create({
        training_added
    },
    {
        include:[trainings, initialDate, finalDate]              
    })
  res.send("created")
  }catch(error){
  res.send(error)
  }
};