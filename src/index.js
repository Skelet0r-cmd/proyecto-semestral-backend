const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const user = require('./routes/user.routes')
const auth = require('./routes/auth.routes')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(json());
user(app);
auth(app);

/*routes*/
app.get('/',(req,res) => {
    res.send("Welcompe to the API")
});

/* CONNECTION TO MONGOOSE */
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('CONNECT SUCCESFUL'))
.catch((error) => console.error('ERROR TO CONNECT'));

app.listen(port,()=> console.log('SERVER LISTENING IN THE PORT:', port));