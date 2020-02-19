const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const env = require('dotenv').config();
const routes = require ('./routes');

const {setupWebsocket} = require ('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(env.parsed.mongoDBURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

app.use(cors());
app.use(express.json());
app.use(routes)

server.listen(1505);   