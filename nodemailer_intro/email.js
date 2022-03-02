const nodemailer = require('nodemailer')

const transp = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mbensan.test@gmail.com',
    pass: 'mbensan.2022'
  }
})

function send (receivers, subjet, html) {
  const options = {
    from: 'mbensan.test@gmail.com',
    //to: ['inzunzapaula1@gmail.com','javiera@plataforma5.la'],
    to: receivers,
    //subject: 'Eres la ganadora del sorteo millonario!!!',
    subjet,
    html
    //html: `<a href="sitiopeligroso.php">Click aquí</a>`
  }

  transp.sendMail(options, () => {
    console.log('Email enviado');
  })
}
// send('mbensan@gmail.com', 'Prueba', '<h3>Hola, esto es una prueba</h3>')
module.exports = send
