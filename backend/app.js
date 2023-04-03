let express  = require("express");
let cors = require("cors");
let app  = express();
let dbConfig = require("./config/dbConfig");

let loginRouter = require("./router/loginRouter");
let customerRouter = require('./router/customerRouter');
let productRouter = require('./router/productRouter');
let orderRouter = require('./router/orderRouter');
// let accountRouter = require('./router/accountRouter');
let categoryRouter = require('./router/categoryRouter');
// let accountRouter =require('./router/accountRouter');


dbConfig.dbConnection;
dbConfig.adminAccount();  // calling this variable to get the connection 

app.use(express.json());
app.use(cors());            // disable cors policy 



app.use("/api/customers",customerRouter);
app.use("/api/login",loginRouter);
app.use("/api/products",productRouter);
app.use("/api/categories",categoryRouter);
app.use("/api/orders",orderRouter);
// app.use("/api/account",accountRouter);
// app.use("./api/accounts",accountRouter);



app.listen(3001,()=>console.log("server running on port number 3001"));


