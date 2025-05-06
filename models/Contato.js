const mongoose = require('mongoose');

const contatoSchema = new mongoose.Schema({
  nome: String,
  email: String,
  telefone: String,
  endereco: String,
  foto: String
});

module.exports = mongoose.model('Contato', contatoSchema);
