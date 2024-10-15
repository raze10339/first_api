import express from 'express';
const app = express();
//We need a database of quates
const quotes = [
    'JS is fun but certainly not easy',
    'Code is like humor. When you have to explain it, it’s bad.',
    'In programming, the hard part isn’t solving problems, but deciding what problems to solve.',
    'Simplicity is the soul of efficiency.',
    'Programming isn’t about what you know; it’s about what you can figure out.',
    'Before software can be reusable, it first has to be usable.',
    'Make it work, make it right, make it fast.',
    'The only way to learn a new programming language is by writing programs in it.',
    'Java is to JavaScript what car is to Carpet.',
    'If debugging is the process of removing bugs, then programming must be the process of putting them in.',
    'A good programmer is someone who always looks both ways before crossing a one-way street.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Programming languages, like pizzas, come in infinite varieties, but JavaScript is your pineapple pizza.',
    'Software and cathedrals are much the same – first we build them, then we pray.'
];
/*
Route that sends back a random quote from the database
- Create a GET route with the path of '/quote'
- Your callback should reference the responseObj and use an underscore for the requestObj
- Your code block should create a variable randomQuote that is assigned a random string from the quotes array
- Use the responseObj.send method to send an object back with a property of quote that has the value of your randomQuote string
ie. It sends back an object like the one below:
{
  quote: 'JavaScript is the tool that turns ideas into reality.'
}
*/
// When a route sends back an array or an object. It is an API route
// when a route is an API route, you should prefix the path with a /api
app.get('/api/quote', (_, responseObj) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    responseObj.send({
        quote: randomQuote
    });
});
// app.get('/', (_, responseObj) => {
// responseObj.send('Hi there from the server!');
// });
// app.get('/data', (_, responseObj) => {
//   const data = {
//     name: 'JD',
//     age: 44
//   };
// responseObj.send(data);
// });
app.listen(3333, () => {
    console.log('server started on port 3333');
});
