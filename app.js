// app.js

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');

// Configure multer for handling form data
const upload = multer();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes for registration and login
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
mongoose.connect('mongodb+srv://waseemLucky:ForGotten@cluster0.zverr4o.mongodb.net/?retryWrites=true&w=majority/waveapp',{
useNewUrlParser: true,

  useUnifiedTopology: true
}).then(()=>
    console.log('DataBase is Connected')
).catch((error)=>
    console.log('Database connection fail: ', error.message)
)
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
