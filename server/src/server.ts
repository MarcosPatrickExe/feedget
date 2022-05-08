import express from 'express';

const app = express(); // typeof express => function
const PORT : number = 3333; 

app.get('/users', function(request : any, response){ // typeof response => object
    response.send(`Hellow world from NodeJS!!!`);
    //OU: 
    //return response.send("Hellow world from NodeJS!!!");
});

app.listen( PORT, ()=>{
    console.log(`HTTP Server running on port ${PORT}....`);
});


// EXEMPLOS DE USO DO TYPESCRIPT:
//https://www.educba.com/typescript-object-type/?msclkid=45daab00ce8111ec91326f802f3e0587


// DEPOIS VER:
// comandos cURL