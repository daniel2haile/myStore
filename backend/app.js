const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const initiateMyMongooseServer = require('./config/databse')

const app = express();
const PORT = 8080;

//DB connection 
initiateMyMongooseServer();

app.use(express.json());
app.use(cors());

//routes
app.use('/user', authRoutes);

app.listen(PORT, ()=> console.log('listening on port ', PORT))