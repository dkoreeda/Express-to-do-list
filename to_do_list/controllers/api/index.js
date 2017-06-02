const router = require('express').Router();
const controller = require('./controller');

router.get('/tasks', controller.index);
router.get('/tasks/:id', controller.show);

//create a new item in the to do's list
router.post('/tasks', controller.create);

//edit an item
router.put('/tasks/:id', controller.update);
router.delete('/tasks/:id', controller.destroy);

module.exports = router;
