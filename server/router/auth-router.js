import  express  from 'express';
const router = express.Router();
import authcontroller from '../controllers/auth-controller.js';
import signupSchema from '../validator/auth-validator.js';
// import loginSchema from '../validator/auth-validator.js';
import validate from '../middleware/validate-middleware.js';
import authMiddleware from '../middleware/auth-middleware.js'

router.route("/").get(authcontroller.home);
router.route("/register").post(validate(signupSchema),authcontroller.register);
router.route("/login").post(authcontroller.login);

router.route('/user').get( authMiddleware,authcontroller.user);


export default router;