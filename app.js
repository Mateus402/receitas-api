//API com Node.js - Express 
//Axios - biblioteca do JavaScript para requisições HTTP

const express = require('express');
const app = express();
const axios = require('axios');

const port = 3000;

app.get('/receitas', async (req, res) => {
  const { prato } = req.query;
  const url = `https://forkify-api.herokuapp.com/api/search?q=${prato}`;
  try {
    const response = await axios.get(url);
    const receitas = response.data.recipes;
    const count = receitas.length
    res.json({count, receitas});
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: 'Não foi possível encontrar receitas para o prato informado.' });
  }
});

//URL para requisição: http://localhost:3000/receitas?prato=pizza

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
