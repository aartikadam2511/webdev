const express=require("express");
const bodyparser=require("body-parser");

const app=express();
app.use(bodyparser.urlencoded({extended:true}))
app.get("/",function(req,res)
{
res.sendFile(__dirname+"/my.html");
});

app.post("/",function(req,res){
    var num1=Number(req.body.n1);
    var num2=Number(req.body.n2);
    var operator=String(req.body.operator);

    if(operator==='+'){
        var result=num1+num2;
        res.send("the result is"+result);
    }
    else if(operator=='-')
    {
        var result=num1-num2;
        res.send("the result is"+result);
    }
    else if(operator=='*')
    {
        var result=num1*num2;
        res.send("the result is"+result);
    }
    else if(operator=='/')
    {
        var result=num1/num2;
        res.send("the result is"+result);
    }
    else{
        res.send("wrong input");
    }
}
);

app.post("/",function(req,res){
res.send("thanks for submitting value");
});

app.listen(3000,function(){
console.log("server chalu ahi");
});