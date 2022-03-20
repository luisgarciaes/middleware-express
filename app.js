const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Hello world, this is the root route woo!🎉');
});

app.listen(3000);
app.get('/uno', (req,res)=>{
    res.send('Hello world from route One 🥇')
})