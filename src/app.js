//require modules
const express = require("express");
const path=require("path");
const hbs=require("hbs");
const { stringify } = require("querystring");
const { query } = require("express");
const app = express();

//data save for test
let userId="00000";
let test="Tcs NQT";
let systemName="C01";
//end

const port=process.env.PORT||3000;

//paths & links
const publicStaticPath=path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../templates/views");
const partialsPath=path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',templatePath);
hbs.registerPartials(partialsPath);

//routing
app.use(express.static(publicStaticPath));

app.get("/",(req,resp)=>{
    resp.render('index.hbs');
})
app.get("/test",(req,resp)=>{
    queryStr=req.query;
    let userId=queryStr.CandidateId;
    console.log(userId);
    console.log(queryStr);
    //let rep="";
    let rep= userId+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+userId+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "+userId+" <br><br>";
    console.log(rep);
    for(var i=0;i<10;i++){
        rep=rep+rep;
    }
    resp.render('test', {replace : rep,userid:userId});
})
app.get("*",(req,resp)=>{
    resp.render('404err.hbs');
})

app.listen(port,()=>{
    console.log("server is listening port : "+port);
})