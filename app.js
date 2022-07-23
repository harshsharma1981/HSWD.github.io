const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser")
const port = 8000;

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/help&feedback');
}
//define mongoose schema
const helpfeedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    feedback: String,
  });

const helpfeedback = mongoose.model('helpfeedback', helpfeedbackSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory



// ENDPOINTS
app.get('/', (req, res)=>{
    
    res.status(200).render('home.pug');
})
app.get('/game', (req, res)=>{
    
    res.status(200).render('game.pug');
})
app.get('/app', (req, res)=>{
    
    res.status(200).render('app.pug');
})
app.get('/about', (req, res)=>{
    
    res.status(200).render('about.pug');
})
app.get('/helpfeedback', (req, res)=>{
   
    res.status(200).render('helpfeedback.pug');
}) 

app.post('/helpfeedback', (req, res)=>{
   var mydata = new helpfeedback(req.body);
   mydata.save().then(()=>{
    res.send("thanks for your feedback");
   }).catch(()=>{
    res.statusCode(404).send("item was not saved")
   })
    //  res.status(200).render('help&feedback.pug' );
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
