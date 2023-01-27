const express = require('express');
const cors = require('cors');
const initiateMyMongooseServer = require('./config/databse')

const app = express();
const PORT = 8080;

//DB connection 
initiateMyMongooseServer();

app.use(express.json());
app.use(cors());



app.listen(PORT, ()=> console.log('listening on port ', PORT))