const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
  res.render('index');
});

router.post('/add', async (req, res, next) => {
  res.send('añadiendo tarea ')
});


module.exports = router;
