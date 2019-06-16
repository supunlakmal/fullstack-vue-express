const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
//middelware
app.use(bodyParser.json());
app.use(cors());
const posts  = require('./routes/api/posts');
app.use('/api/post',posts)
const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server stared  on  port ${port}`));