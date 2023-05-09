import {users} from '../../models/users.js'

export const createUser = async (req, res, next) => {
    try {
      const { name, email} = req.body;

      const userFind = await users.findAll({ where: { email: email } });
   
      if (!name || !email) return res.send({ message: "Data required" });
      if (userFind.length) return res.send({ message: "User already exists" });
      await users.create({ name, email});
      res.send({ message: "User created successfully" });
    } catch (error) {
      res.send(error);
    }
  };