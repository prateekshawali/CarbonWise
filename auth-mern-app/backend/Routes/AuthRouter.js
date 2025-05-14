const { signup, login, getUserDetails } = require('../controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');
const router = require('express').Router();


router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);
router.get('/user-details', getUserDetails);

module.exports = router;