const express= require('express');
const path= require('path');
const axios= require('axios');
const app=express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'public','login.html'));
})
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);

})