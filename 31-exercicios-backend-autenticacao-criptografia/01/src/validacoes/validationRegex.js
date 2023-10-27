const validationRegex = {
  email: {
    regex: '^[a-zA-Z0-9+_.-]+@[a-zA-Zz0-9.-]+$',
  },
  password: {
    regex: '^(?=.*[A-Z])(?=.*[_!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,12}$',
  },
};

module.exports = validationRegex;
