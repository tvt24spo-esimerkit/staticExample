const express=require('express');
const port=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(port, function(){
    console.log("Express esimerkki portissa "+port);
});



module.exports=app;