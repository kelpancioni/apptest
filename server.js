const express = require('express');
const mongoose = require('mongoose');
const users = require('./rotas/API/users');
const posts = require('./rotas/API/posts');
const profile = require('./rotas/API/profile');
const bodyParser = require('body-parser');


const app = express();

//BodyParser MW

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//MongoDB Connect

mongoose.connect(db).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

app.get('/', (req,res) => res.send('Ola Mundo'));

// Use Rotas

app.use('/API/users',users);
app.use('/API/profile',profile);
app.use('/API/posts',posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

