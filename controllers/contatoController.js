const Contato = require('../models/Contato');

exports.criar = async (req, res) => {
    try {
      const contato = new Contato(req.body);
      await contato.save();
      res.status(201).json({ mensagem: 'Contato criado' });
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  exports.listar = async (req, res) => {
    const contatos = await Contato.find();
    res.json(contatos);
  };
  
  exports.buscarPorId = async (req, res) => {
    const contato = await Contato.findById(req.params.id);
    if (!contato) return res.status(404).json({ mensagem: 'Contato não encontrado' });
    res.json(contato);
  };
  
  exports.atualizar = async (req, res) => {
    const atualizado = await Contato.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!atualizado) return res.status(404).json({ mensagem: 'Contato não encontrado' });
    res.json(atualizado);
  };
  
  exports.deletar = async (req, res) => {
    const excluido = await Contato.findByIdAndDelete(req.params.id);
    if (!excluido) return res.status(404).json({ mensagem: 'Contato não encontrado' });
    res.json({ mensagem: 'Contato deletado' });
  };
  