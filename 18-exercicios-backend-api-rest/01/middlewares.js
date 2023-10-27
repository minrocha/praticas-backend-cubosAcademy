const { students } = require('./data/students');
const courses = require('./data/courses');

const validatePassword = (req, res, next) => {
  const { password } = req.query;

  if (!password) {
    return res.status(401).json({ message: 'A senha deve ser informada' });
  }

  if (password !== 'cubos123') {
    return res
      .status(401)
      .json({ message: 'A senha informada está incorreta' });
  }

  next();
};

const findStudent = (req, res, id) => {
  const studentFound = students.find(student => {
    return student.id === Number(id);
  });

  if (!studentFound) {
    res.status(404).json({ message: 'Aluno não encontrado' });
  }

  return studentFound;
};

const validateData = (req, res, updateType, next) => {
  const { id } = req.params;
  switch (updateType) {
    case 0:
      {
        const { name, surname, age, course } = req.body;

        if (!name || name === '' || name.replaceAll(' ', '') === '') {
          return res.status(400).json({ message: 'O nome deve ser informado' });
        }

        if (!surname || surname === '' || surname.replaceAll(' ', '') === '') {
          return res
            .status(400)
            .json({ message: 'O sobrenome deve ser informado' });
        }

        if (!age) {
          return res
            .status(400)
            .json({ message: 'A idade deve ser informada' });
        } else if (age < 18) {
          return res.status(400).json({ message: 'O aluno é menor de idade' });
        }

        if (!course || course === '' || course.replaceAll(' ', '') === '') {
          return res
            .status(400)
            .json({ message: 'O curso deve ser informado' });
        }

        if (!courses.includes(course.toLowerCase())) {
          return res
            .status(404)
            .json({ message: 'O curso informado não é válido' });
        }

        studentFound = findStudent(req, res, id);

        return { name, surname, age, course, studentFound };
      }
      break;
    case 1:
      {
        const { name } = req.body;

        if (!name || name === '' || name.replaceAll(' ', '') === '') {
          return res.status(400).json({ message: 'O nome deve ser informado' });
        }

        const studentFound = findStudent(req, res, id);

        return { name, studentFound };
      }
      break;
    case 2:
      {
        const { surname } = req.body;

        if (!surname || surname === '' || surname.replaceAll(' ', '') === '') {
          return res
            .status(400)
            .json({ message: 'O sobrenome deve ser informado' });
        }

        const studentFound = findStudent(req, res, id);

        return { surname, studentFound };
      }
      break;
    case 3:
      {
        const { age } = req.body;

        if (!age) {
          return res
            .status(400)
            .json({ message: 'A idade deve ser informada' });
        } else if (age < 18) {
          return res.status(400).json({ message: 'O aluno é menor de idade' });
        }

        const studentFound = findStudent(req, res, id);

        return { age, studentFound };
      }
      break;
    case 4:
      {
        const { course } = req.body;

        if (!course || course === '' || course.replaceAll(' ', '') === '') {
          return res
            .status(400)
            .json({ message: 'O curso deve ser informado' });
        }

        if (!courses.includes(course.toLowerCase())) {
          return res
            .status(404)
            .json({ message: 'O curso informado não é válido' });
        }

        const studentFound = findStudent(req, res, id);

        return { course, studentFound };
      }
      break;
    case 5:
      {
        const { name, surname, age, course } = req.body;

        if (!name || name === '' || name.replaceAll(' ', '') === '') {
          return res.status(400).json({ message: 'O nome deve ser informado' });
        }

        if (!surname || surname === '' || surname.replaceAll(' ', '') === '') {
          return res
            .status(400)
            .json({ message: 'O sobrenome deve ser informado' });
        }

        if (!age) {
          return res
            .status(400)
            .json({ message: 'A idade deve ser informada' });
        } else if (age < 18) {
          return res.status(400).json({ message: 'O aluno é menor de idade' });
        }

        if (!course || course === '' || course.replaceAll(' ', '') === '') {
          return res
            .status(400)
            .json({ message: 'O curso deve ser informado' });
        }

        if (!courses.includes(course.toLowerCase())) {
          return res
            .status(404)
            .json({ message: 'O curso informado não é válido' });
        }

        return { name, surname, age, course };
      }
      break;
    case 6:
      {
        if (isNaN(Number(id))) {
          return res
            .status(400)
            .json({ message: 'O id informado deve ser um número válido' });
        }

        studentFound = findStudent(req, res, id);

        return { id, studentFound };
      }
      break;
  }

  next();
};

module.exports = { validatePassword, validateData };
