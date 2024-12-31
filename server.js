require('dotenv').config(); /// הפעלה של פונקציה קונפיג מתוך ספריית דוט אן וי
const http = require ('http');
const app = require ('./app');
const port = 5050;
const srv = http.createServer(app);
srv.listen(port,()=>{console.log("server wprking")});


