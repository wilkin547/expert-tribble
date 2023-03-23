const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Configurar body-parser para analizar las solicitudes con un cuerpo en formato JSON
app.use(express.json());
app.use(cors());

let ListaDePlatos = []

app.post('/menu/:plato', (req, res) => {
  let p = req.params.plato;
  ListaDePlatos.push(p)
  console.log(p);
})

app.get('/platosEnCola', (req, res) => {
  res.send(ListaDePlatos)
  
})

app.listen(3000, () => {
  console.log('El servidor está funcionando');
});
