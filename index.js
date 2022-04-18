//Importing the required Modules
import data from "./data.js";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
const app = express();


//Using body parser to parse the data from html form
app.use(bodyParser.urlencoded({ extended: true }));
//Using public directory to render the static files(css,images)
app.use(express.static("public"));
//Using ejs as view engine for rendering the html files
app.set("view engine", "ejs");

// Set up default mongoose connection
const mongoDB = "mongodb://localhost/stockDB";
mongoose.connect(mongoDB, { useNewUrlParser: true });

// Set up the schema for mongoose
const loginSchema = new mongoose.Schema({
    email: String,
    password: String,
    token: String 
});

const stockSchema = new mongoose.Schema({
    sno: Number,
    name: String,
    current_market_price: Number,
    market_cap: Number,
    stock_p_e: Number,
    divident_yield: Number,
    roce_percent: Number,
    roe_previous_annual: Number,
    debt_to_equity: Number,
    eps: Number,
    reserves: Number,
    debt: Number
});

// Initalize the model
const login = new mongoose.model('Login', loginSchema);
const stock = new mongoose.model('Stock', stockSchema);


//function to bulk add the data to the database
// function addData(data) {
//     stock.insertMany(data, function (err, docs) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Multiple documents inserted to Collection");
//         }
//     });
// }
// addData(data);


//Routes to handle the homepage which is the login page
app.route("/")

.get(function(req, res) {
    res.render("home");
});

app.get("/register", function(req, res) {
    res.render("register");
});

app.get('/search', function(req, res) {
    res.render('search');
});

//Listeninig to the port 3000
app.listen(3000, function() {console.log("Server started on port 3000");});
