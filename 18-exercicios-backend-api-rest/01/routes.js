const express = require('express');
const {
  listStudents,
  listSpecifcStudent,
  registerStudent,
  deleteStudent,
  updateStudent,
  updateName,
  updateSurname,
  updateAge,
  updateCourse,
} = require('./controllers/students');

const routes = express();

routes.get('/students', listStudents);
routes.get('/:id', listSpecifcStudent);

routes.post('/', registerStudent);

routes.put('/:id', updateStudent);

routes.patch('/:id/name', updateName);
routes.patch('/:id/surname', updateSurname);
routes.patch('/:id/age', updateAge);
routes.patch('/:id/course', updateCourse);

routes.delete('/:id', deleteStudent);

module.exports = routes;
