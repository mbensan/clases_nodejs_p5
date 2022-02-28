const express = require('express');
const axios = require('axios');
const jimp = require('jimp');

const app = express();
app.use(express.static('public'))

app.get('/sepia', async (req, res) => {
  const url = req.query.url
  const font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK);
  let img;
  try {
    img = await jimp.read(url)
  } catch(error) {
    return res.send('Imagen no se pudo abrir')
  }
  img.sepia()
  await img.print(font, 10, 10, 'Después de la tormenta viene la calma')
  await img.writeAsync('public/sepia.jpg')
  res.send('Procesando la imagen de URL ' + url)
});


app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
