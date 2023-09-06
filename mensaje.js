const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();

const envioMensaje = (req, res, next) => {
  client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('QR Recibido', qr);
  });

  client.on('ready', () => {
    console.log('El cliente esta listo!!!');
  });

  client.initialize();
}

module.exports = { envioMensaje, client };