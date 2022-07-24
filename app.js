const express = require('express');
 const app = express();
 const path = require('path');
 const bodyParser = require("body-parser")
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

 app.post('/helpfeedback', (req, res)=>{
    var mydata = new helpfeedback(req.body);
    mydata.save().then(()=>{
     res.send("thanks for your feedback");
    }).catch(()=>{
     res.statusCode(404).send("item was not saved")
    })
     //  res.status(200).render('help&feedback.pug' );
 }) 



const port = 8000;
app.use(express.static('static'));
app.use('/static', express.static('static'));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});
app.get('/game', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/game.html'));
});
app.get('/helpfeedback', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/helpfeedback.html'));
});
app.get('/app', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/app.html'));
});
app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/about.html'));
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
