import express from "express";
import connectDatabase from "./config/db";


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

app.post('/api/users', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

// CONNECTION LISTENER
app.listen(3000, () => console.log('Express server running on port 3000'));