const express = require('express');
const { envioMensaje, client } = require('./mensaje');
const validation = require('./parametro');
const app = express();
port = process.env.PORT || 3000;

app.use(express.json());
envioMensaje();

app.post('/validation',validation, (req, res) => {
  client.sendMessage(`${req.body.countryCode}${req.body.number}@c.us`, `${req.body.message ?? 'Hello'}`);
  res.json('Message Sent');
})

app.listen(port, () => {
  console.log('The server is running on: ', port);
});

