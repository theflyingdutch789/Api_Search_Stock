//Importing the required Modules
import data from "./data.js";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import 'dotenv/config';
import auth from "./middleware/auth.js";
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
const userSchema = new mongoose.Schema({
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
const User = new mongoose.model('User', userSchema);
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
app.get("/login", function (req, res) {
    res.render("login");
});

app.post("/login", async (req, res) => {

    
    try {
      // Get user input
      const { email, password } = req.body;
  
      // Validate user input
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await User.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        // save user token
        user.token = token;
  
        // user
        res.status(200).json(user);
      }else{
        res.status(400).send("Invalid Credentials");
      } 
    } catch (err) {
      console.log(err);
    }
    // Our login logic ends here
  });

app.get("/register", function(req, res) {
    res.render("register");
});


app.post("/register", async (req, res) => {

    try {
      // Get user input
      const { email, password } = req.body;
  
      // Validate user input
      if (!(email && password )) {
        res.status(400).send("All input is required");
      }
  
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      //Encrypt user password
      const encryptedPassword = await bcrypt.hash(password, 10);
  
      // Create user in our database
      const user = await User.create({
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
      });
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
  
      // return new user
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
    
  });
  

  

app.get("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

  
app.post('/search/:searchkey', auth, (req, res) => {
    stock.findOne({ name: req.params.searchkey }, function (err, foundStock){
        if (!foundStock) {
            res.status(403).send("Stock Not Found");
        }else{
            res.status(200).json(foundStock);
        }
    });
});

//Listeninig to the port 3000
app.listen(3000, function() {console.log("Server started on port 3000");});
