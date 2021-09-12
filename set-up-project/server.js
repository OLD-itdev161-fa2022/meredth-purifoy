import express from "express";


// INITIALIZE EXPRESS APPLICATION
const app = express();

//API ENDPOINTS 
app.get('/', (req, res) => {
    res.send('http get request sent to root API endpoint')
});

// CONNECTION LISTENER
app.listen(3000, () => console.log('Express server running on port 3000'));