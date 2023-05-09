import {users} from '../../models/users.js'

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const userDelete = await users.findByPk(id);
        if(userDelete.deleted === false) {
            await users.update({ deleted: true }, { where: { id: id } });
            res.send({ message: 'User has already been deleted' });
        }
        if(userDelete.deleted === true) {
            await users.update({ deleted: false }, { where: { id: id } });
            res.send({ message: 'User has been actived' });
        };
        
    } catch (error) {
        res.send({ message: error });
    };
};

