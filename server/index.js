const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/User')
const BankModel = require('./models/Bank')
const bcrypt = require('bcrypt'); // Import bcrypt for hashing

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(

    "mongodb+srv://harshdubey:HarshD36%40@cluster0.gy1d4yp.mongodb.net/bankinfo?retryWrites=true&w=majority&appName=Cluster0"
    
)



// API to Login User
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await UserModel.findOne({ email: email });
        
        if (!user) {
            // If user does not exist, return 404 status
            return res.status(404).json({ error: "No record existed" });
        }

        // Compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (isMatch) {
            // If the passwords match, return success
            res.json("Success")
        } else {
            // If the passwords do not match, return 401 status
            res.status(401).json({ error: "The password is incorrect" });
        }
    } catch (err) {
        // Handle any server errors
        console.error("Error during login:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});


// API to Register New User
app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        UserModel.create({name, email, password: hash})
        .then(users => res.json(users))
        .catch(err => res.json(err))

    }).catch(err => console.log(err.message))

})

// API to Get Sorted List of Users
app.get("/h", (req, res) => {
  
    BankModel.find({})
      .then(tasks => res.json(tasks))
      .catch(err =>
        res.json(err)
    )

})


app.get("/getAccount/:id", (req, res) => {
  
    const id = req.params.id;
   
    BankModel.findById({_id:id})
    .then(tasks => res.json(tasks))
    .catch(err =>
      res.json(err)
   )
   
   })


   app.put("/updateAccount/:id", (req, res) => {
  
    const id = req.params.id;
   
    BankModel.findByIdAndUpdate({_id:id}, {ifsc: req.body.ifsc, branchName: req.body.branchName, bankName: req.body.bankName, accountNumber: req.body.accountNumber, accountHolderName: req.body.accountHolderName})
    .then(tasks => res.json(tasks))
    .catch(err =>
      res.json(err)
   )
   
   })

   app.delete("/deleteBank/:id", (req, res) => {
  
    const id = req.params.id;
   
    BankModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err =>
      res.json(err)
   )
   
   })


   // API to Create New User
app.post("/createAccount", (req, res) => {
    BankModel.create(req.body)
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err))
 })

 

app.listen(3002, ()=> {
    console.log("Server is Running")
})