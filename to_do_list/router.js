const router = require('express').Router();

router.use('/tasks', require('./controllers/tasks'));
router.use('/api', require('./controllers/api'));
router.get('/', (req, res) => res.render('index'));

module.exports = router;
