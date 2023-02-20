const app = require("express")();
app.get("/",(req,res)=>{
    res.send("Base api endpoint");
})

app.listen("4400",()=>{
    console.log("server running at port 4400")
})