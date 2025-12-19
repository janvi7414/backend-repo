const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get all items');
});

router.get('/:id', (req, res) => {
  res.send(`Get item ${req.params.id}`);
});

router.post('/', (req, res) => {
  res.send('Create item');
});

router.put('/:id', (req, res) => {
  res.send(`Update item ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`Delete item ${req.params.id}`);
});

module.exports = router;

// to rename a file Rename-Item -Path "router" -NewName "routes"
