const express = require('express');
const cors = require('cors')

const app = express();
const userRoute = require('./routes/userRoute')

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
    
    credentials:true,
}));
app.use(express.urlencoded({ extended: true }));
app.use('/user',userRoute);



app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
});