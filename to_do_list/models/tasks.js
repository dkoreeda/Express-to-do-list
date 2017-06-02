const db = require('../config/database');

const Task = {};

// methodName : function() { code lines }
// objectName.methodName()

Task.findAll = () => {
  return db.manyOrNone('SELECT * FROM tasks ORDER BY id');
};

Task.findById = (id) => {
  return db.one('SELECT * FROM tasks WHERE id=$1',
    [id]
  );
};

Task.create = (subject, content) => {
  return db.one(
    'INSERT INTO tasks(subject, content) VALUES ($1, $2) returning id',
    [subject, content]
  );
};

Task.update = (id, subject, content) => {
  return db.one(
    'UPDATE tasks SET subject = $1, content = $2 WHERE id = $3 returning id',
    [subject, content, id]
  );
};

Task.destroy = (id) => {
  return db.none(
    'DELETE FROM tasks WHERE id = $1',
    [id]
  );
}
module.exports = Task;
