const express = require('express');
let { students } = require('../data/students');
let { identifierId } = require('../data/students');
const { validateData } = require('../middlewares');

const app = express();

// app.use(validateData);

const listStudents = (req, res) => {
  return res.status(200).json(students);
};

const listSpecifcStudent = (req, res) => {
  const { id, studentFound } = validateData(req, res, 6);

  return res.status(200).json(studentFound);
};

const registerStudent = (req, res) => {
  const { name, surname, age, course } = validateData(req, res, 5);

  const student = {
    id: ++identifierId,
    name: name,
    surname: surname,
    age: age,
    course: course,
  };

  students.push(student);

  return res.status(201).send();
};

const updateStudent = (req, res) => {
  const { name, surname, age, course, studentFound } = validateData(
    req,
    res,
    0
  );

  studentFound.name = name;
  studentFound.surname = surname;
  studentFound.age = age;
  studentFound.course = course;

  return res.status(204).send();
};

const updateName = (req, res) => {
  const { name, studentFound } = validateData(req, res, 1);

  studentFound.name = name;

  return res.status(204).send(name);
};

const updateSurname = (req, res) => {
  const { surname, studentFound } = validateData(req, res, 2);

  studentFound.surname = surname;

  return res.status(204).send();
};

const updateAge = (req, res) => {
  const { age, studentFound } = validateData(req, res, 3);

  studentFound.age = age;

  return res.status(204).send();
};

const updateCourse = (req, res) => {
  const { course, studentFound } = validateData(req, res, 4);

  studentFound.course = course;

  return res.status(204).send();
};

const deleteStudent = (req, res) => {
  const { id } = req.params;

  if (isNaN(Number(id))) {
    return res
      .status(400)
      .json({ message: 'O id informado deve ser um número válido' });
  }

  const studentFound = students.find(student => {
    return student.id === Number(id);
  });

  if (!studentFound) {
    return res.status(404).json({ message: 'Aluno não encontrado' });
  }

  let removedStudent;

  students = students.filter(student => {
    if (student.id === Number(id)) {
      removedStudent = student;
    }
    return student.id !== Number(id);
  });

  return res.status(200).json(removedStudent);
};

module.exports = {
  listStudents,
  listSpecifcStudent,
  registerStudent,
  deleteStudent,
  updateStudent,
  updateName,
  updateSurname,
  updateAge,
  updateCourse,
};
