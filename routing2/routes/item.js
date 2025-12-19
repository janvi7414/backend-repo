const express = require('express')
const router = express.Router();

//home page
router.get('/', (req, res) => {
    res.send('got a get req');
})
router.post('/items', (req, res) => {
    res.send('got a post req');
})
router.put('/items/:id', (req, res) => {
    res.send('got a put req');
})
router.delete('/items/:id', (req, res) => {
    res.send('got a delete req');
})

module.exports = router