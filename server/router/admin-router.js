import express from 'express';
// import getAllUsers from '../controllers/admin-controller.js';
//here we have destructured this as i am getting the data in the form f objects from the admin controller 
import adminController from '../controllers/admin-controller.js';
import authMiddleware from '../middleware/auth-middleware.js';

const router = express.Router();

router.route('/users').get(authMiddleware,adminController.getAllUsers);
router.route('/users/:id').get(authMiddleware,adminController.getUserById);
router.route('/contacts').get(authMiddleware,adminController.getAllContacts);
router.route('/users/update/:id').patch(authMiddleware,adminController.updateUserById);
router.route("/users/delete/:id").delete(authMiddleware,adminController.deleteUserById);
router.route("/contacts/delete/:id").delete(authMiddleware,adminController.deleteContactById);


export default router;