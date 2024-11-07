const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/error');
const cookieParser = require('cookie-parser')
const path = require('path')
const dotenv = require('dotenv');
const cors = require("cors");
dotenv.config({path:path.join(__dirname,"config/config.env")});

app.use(cors({
    credentials:true,
    AccessControlAllowOrigin: '*',
    origin : "*"
  }));
  
app.use(express.json());
app.use(cookieParser());

const products = require('./routes/product')
const contact = require('./routes/contact')
const list = require('./routes/Listproperty')
const roomlist = require('./routes/roomlist')

app.use('/api/v1/',products);
app.use('/api/v1/',contact);
app.use('/api/v1/',list);
app.use('/api/v1/',roomlist);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
    })
}

app.use(errorMiddleware)

module.exports = app;
