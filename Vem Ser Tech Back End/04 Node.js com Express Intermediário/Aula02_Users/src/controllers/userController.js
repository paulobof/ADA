// controllers/userController.js
const userModel = require('../models/userModel');

function getAllUsers(req, res) {
  userModel.getAllUsers((err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno do servidor' });
      return;
    }
    res.status(200).json(results);
  });
}

function getUserById(req, res) {
  debugger;
  const userId = req.params.id;
  userModel.getUserById(userId, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno do servidor' });
      return;
    }
    if (!result[0]) {
      res.status(404).json({ error: 'Usuário não encontrado' });
      return;
    }
    res.status(200).json(result[0]);
  });
}

function createUser(req, res) {
  const userData = req.body;
  userModel.createUser(userData, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno do servidor' });
      return;
    }
    res.status(201).json({ message: 'Usuário criado com sucesso!', id: result.insertId });
  });
}

function updateUser(req, res) {
  const userId = req.params.id;
  const userData = req.body;
  userModel.updateUser(userId, userData, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno do servidor' });
      return;
    }
    res.status(204).json({ message: 'Usuário atualizado com sucesso!' });
  });
}

function deleteUser(req, res) {
  const userId = req.params.id;
  userModel.deleteUser(userId, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro interno do servidor' });
      return;
    }
    res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  });
}

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };