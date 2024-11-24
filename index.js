const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/check-engagement',(req,res)=>
{
   let likes = req.query.likes;
   let result;
   if(likes<100)
    result='low';
    else if(likes>=100 && likes<=500)
    result = 'moderate';
    else
    result ='high';
    res.send('Engagement level is '+ result+'.');
});

app.get('/check-activity-level',(req,res)=>
{
   let steps = parseFloat(req.query.steps);
   let result;
   if(steps < 5000)
   {
     result = 'low';
   }
   else if(steps >= 5000 && steps <= 10000)
   {
     result = 'moderate';
   }
   else{
     result='high';
   }
   res.send(' User\'s activity level is ' + result +'.');
})

app.get('/check-temp',(req,res)=>
{
  let temp = parseFloat(req.query.temperature);
  let result;
  if(temp<15)
  {
    result ='Temperature is cold';
  }
  else if(temp>=15 && temp<=25)
  {
    result = 'Temperature is warm';
  }
  else
  {
    result = 'temperature is hot';
  }
  res.send(result);
})

app.get('/check-num',(req,res)=>{
  let no = parseFloat(req.query.no)
  let result;
  if(no>0)
  {
    result = 'Positive Number';
  }
  else if(no==0)
  {
    result='Zero';
  }
  else{
    result = 'Negative Number'
  }
  res.send('The number is ' + result);
});


app.get('/check-discount',(req,res)=>{
  let age = parseFloat(req.query.age)
  let result;
  if(age>65)
  {
    result = 'User is eligible for a discount';
  }
  else{
    result='User is not eligible for a discount';
  }
  res.send(result);
});


app.get('/check-login',(req,res)=>{
  let login = req.query.login === 'true';
  let result;
  if(login)
  {
    result = 'User is logged in';
  }
  else{
    result='User is not logged in';
  }
  res.send(result);
});



app.get('/check-oddeven',(req,res)=>{
  let no = parseFloat(req.query.no)
  let result;
  if(no%2==0)
  {
    result = 'even';
  }
  else{
    result='odd';
  }
  res.send('The number '+ no.toString() + ' is '+ result);
});

app.get('/check-number',(req,res)=>{
  let no = parseFloat(req.query.no)
  let result;
  if(no>=0)
  {
    result = 'positive';
  }
  else{
    result='negative';
  }
  res.send('The number '+ no.toString() + ' is '+ result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
