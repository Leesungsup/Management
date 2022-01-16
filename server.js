const express =require("express");
const bodyParser=require("body-parser");
const app=express();
const path = require("path");
const config = require("./config/key");
const port=process.env.PORT || 5000;
const mongoose = require("mongoose");
const connect = mongoose.connect(config.mongoURI,
  {
    //useNewUrlParser: true, useUnifiedTopology: true,
    //useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


app.get('/api/hello',(req,res)=>{
    console.log('hello')
    res.send({message:'Hello Express!'});
});
app.use('/api',require('./customer'))
/*app.get('/api/customers',(req,res)=>{
    res.send([
        {
        'id': 1,
        'image': 'https://placeimg.com/48/48/1',
        'name': '홍길동',
        'birthday': '961222',
        'gender': '남자',
        'job': '대학생'
        },
        {
        'id': 2,
        'image': 'https://placeimg.com/48/48/2',
        'name': '나동빈',
        'birthday': '960508',
        'gender': '남자',
        'job': '프로그래머'
        },
        {
        'id': 3,
        'image': 'https://placeimg.com/48/48/3',
        'name': '이순신',
        'birthday': '961127',
        'gender': '남자',
        'job': '디자이너'
        }
        ])
})*/
app.listen(port, () => {
    console.log(`Server Listening on ${port}`)
});