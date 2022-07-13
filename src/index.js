var express = require ( 'express' );
var mongoose = require ( 'mongoose' );
require('dotenv').config()
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
/* Conexión con mongoose */

mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('conectado a moongose exitosamente'))
.catch((error) => console.error('error'));

app.listen(port,()=> console.log('server listening on port', port));