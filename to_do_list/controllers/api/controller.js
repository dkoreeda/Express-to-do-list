const Task = require('../../models/tasks');

const controller = {};

controller.index = (req, res) => {
  Task
    .findAll()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch(err => console.log('Error:', err));
};

controller.show = (req, res) => {
  const id = req.params.id;
  Task
    .findById(id)
    .then((data) => {
      res.json(data);
    })
    .catch(err => console.log('Error:', err));
};

controller.create = (req, res) => {
  const body = req.body;
  const subject = body.subject,
        content = body.content;
  Task
    .create(subject, content)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch(err => console.log('Error:', err));
};

controller.update = (req, res) => {
  const id = req.params.id;
  const subject = req.body.subject,
        content = req.body.content;
  Task
    .update(id, subject, content)
    .then ((data) => {
      res.json(data);
    })
    .catch(err => console.log('Error:', err.responseText));
};

controller.destroy = (req, res) => {
  const id = req.params.id;
  Task
    .destroy(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log('Error:', err));
};

module.exports = controller;
