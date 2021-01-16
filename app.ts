import { connect } from "http2";

const express = require('express'); 
const path = require('path');
const consign = require('consign')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const mongoose = require('mongoose')

const app = express();


mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log('Database is connect with sucess... :D')
}).catch((err)=>{
  console.log('Database connect error... :('+err)
});


app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(cookieParser('datacenter'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname,'public')));

consign({})
.include('models')
.then('controllers')
.then('routes')
.into(app)



app.listen(3000,() => {
    console.log('Run...')
})