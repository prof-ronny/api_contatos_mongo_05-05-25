const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro ao conectar no MongoDB:', err));

const contatoRoutes = require('./routes/contatoRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

app.use(express.json());
app.use(cors());
app.use('/contatos', contatoRoutes);
app.use('/upload', uploadRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

module.exports = app;
