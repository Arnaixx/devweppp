//import libraries
const express = require('express');
const path = require('path');
const consolaRoutes = require('./routes/consola');

const app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));
app.use('/consola',consolaRoutes)
//app definition
app.get('/champi',(request,response)=>{
    console.log('Hola mundo');
    response.send('<h1>Hola mundo</h1>');
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'views','index.html'));
});
//home
app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname, 'views','pagina1.html'));
});    
//act1
app.get('/tarea1',(req,res)=>{
    res.sendFile(path.join(__dirname, 'views','act1.html'));
});         
//act2
app.get('/tarea2',(req,res)=>{
    res.sendFile(path.join(__dirname, 'views','act2.html'));  
});     
//prueba 1
app.get('/prueba1',(req,res)=>{
        console.log(req.query);
        res.send("Datos enviador por querry"+req.query.name);
});

//prueba params
app.get('/prueba2/:name/:age/',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send("Datos enviados por params"+req.params.name);
})

app.post('/prueba3',(req,res)=>{
    console.log(req.body);
})

//launch app
app.listen(8080,()=>{
    console.log("Servidor en linea");
})
