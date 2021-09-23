import express from "express";
import connectDatabase from "./config/db";
import { check, validationResult } from 'express-validation';

// INITIALIZE EXPRESS APPLICATION
const app = express();

// CONNECT DATABASE
connectDatabase();

//CONFIGURE MIDDLEWARE

app.use(express.json({ extended: false }));


//API ENDPOINTS
/**
 * @route GET /
 * @desc Test endpoint 
 */ 
app.get('/', (req, res) => {
    res.send('http get request sent to root API endpoint')
});
/**
 * @route POST api/users
 * @desc Register user 
 */ 

app.post(
    '/api/users',
    [
        check('name', 'Please enter a valid email').isEmail(),
        check(
            'password',
            'Please enter a password with 6 or more characters'
        ).isLength({ min: 6})
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            return res.send(req.body);
        }
    }
);

// CONNECTION LISTENER
app.listen(3000, () => console.log('Express server running on port 3000'));