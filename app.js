let express = require('express');
let app  = express();

let secrets = []

app.use(express.urlencoded({extended:true}));
console.log("servidor corriendo en el puerto 8080")
app.set('view engine', 'pug');

app.get('/',(req,res)=>{
    
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.post("/secret", (req,res)=>{
    secrets.push({"secret":req.body.secret})
    res.redirect("https://google.com")
})

app.get("/secrets",(req,res)=>{
    res.send(secrets)
})



app.listen(8080);

