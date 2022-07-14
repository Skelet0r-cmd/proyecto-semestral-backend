var express = require ( 'express' );
var mongoose = require ( 'mongoose' );
require('dotenv').config()
const user = require('./routes/user')
const cors = require('cors')
/*const auth = require('./routes/auth')*/
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
user(app);
/*auth(app);*/

/*routes*/
app.get('/',(req,res) => {
    res.send("Welcompe to my API")
});

/* Conexión con mongoose */
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('conectado a moongose exitosamente'))
.catch((error) => console.error('error'));

app.listen(port,()=> console.log('server listening on port', port));