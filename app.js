const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Hello world, this is the root route woo!🎉');// localhost:3000
});

app.listen(3000);
app.get('/uno', (req,res)=>{
    res.send('Hello world from route Uno 🥇') // localhost:3000/uno

    
});

app.get('/prueba', (req,res)=>{
    res.send('<h1 style="text-align:center">Ruta Prueba 🛠</h1>') // localhost:3000/prueba

    
});
