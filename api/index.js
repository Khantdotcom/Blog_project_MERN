const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://blog:<db_password>@cluster0.elthj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.post('/register',(req,res)=>{
    const {username,password} = req.body;
    res.json({requestData:{username,password}})
});

app.listen(4000);

