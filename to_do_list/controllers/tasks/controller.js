const toDoList = require('../../models/tasks');

const controller = {};

controller.index = (req, res) => {
  toDoList
    .findAll()
    .then((data) => {
      res.render('tasks/index', {list: data});
    })
    .catch(err => console.log('Error:'. err));
};

controller.show = (req, res) => {
  const id = req.params.id;
  toDoList
    .findById(id)
    .then ((data) => {
      res.render('tasks/show', data);
    })
};

controller.new = (req, res) => {
   res.render('tasks/new');
};

controller.edit = (req, res) => {
  const id = req.params.id;
  toDoList
    .findById(id)
    .then(data => {
      res.render('tasks/edit', data);
    })
};

module.exports = controller;
