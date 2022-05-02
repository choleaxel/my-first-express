import express from "express";  //importing library
import { welcomeHome } from './src/welcomeHome.js';
import { hello, helloPerson, greetNewPerson } from './src/hello.js'; //imports that are defined
//in the hello.js file

const PORT = 3030; //making port a variable

const app = express(); 
app.use(express.json()); //we have to tell express to use if we are sending 

//routes (or list of allowed requests)
// app.get('/hello', (request, response) => {
//     response.send("Is it me you're looking for?");
// });
//equivalent to line 10
app.get('/hello', hello); //this is defined in hello.js

app.get('/', welcomeHome);
app.post('/hello', greetNewPerson);

// app.get('/', (request, response) => {
//     response.send("These are not the droids you're looking for.👋");
// });
//below :person is a param that gets attached to the response
app.get('/hello/:person', helloPerson);


// telling it to listen to the certain port that we have chosen
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`))