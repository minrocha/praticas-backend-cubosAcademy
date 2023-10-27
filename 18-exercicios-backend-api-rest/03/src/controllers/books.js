let { books } = require('../data/books');
let { identifierId } = require('../data/books');

const validateId = (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    return res.status(404).send({
      message: 'O valor do parâmetro ID da URL não é um número válido.',
    });
  }
  return id;
};

const validateTitle = (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(404).json({
      message: 'O valor do parâmetro TÍTULO deve ser informado.',
    });
  }

  return title;
};

const validateAuthor = (req, res) => {
  const { author } = req.body;
  if (!author) {
    return res.status(404).json({
      message: 'O valor do parâmetro AUTOR deve ser informado.',
    });
  }
  return author;
};

const validateYear = (req, res) => {
  const { year } = req.body;
  if (!year) {
    return res.status(404).json({
      message: 'O valor do parâmetro ANO deve ser informado.',
    });
  }
  return year;
};

const validateNumPages = (req, res) => {
  const { numPages } = req.body;
  if (!numPages) {
    return res.status(404).json({
      message: 'O valor do parâmetro NÚMERO DE PÁGIINAS deve ser informado.',
    });
  }
  return numPages;
};

const findBook = (id, res) => {
  const bookFound = books.find(book => {
    return book.id === Number(id);
  });
  if (!bookFound) {
    return res.status(404).json({
      message: 'Não existe livro para o ID informado.',
    });
  }
  return bookFound;
};

const listBooks = (req, res) => {
  return res.send(books);
};

const listSpecificBook = (req, res) => {
  const id = validateId(req, res);
  const bookFound = findBook(id, res);
  return res.status(200).json(bookFound);
};

const registerBook = (req, res) => {
  const title = validateTitle(req, res);
  const author = validateAuthor(req, res);
  const year = validateYear(req, res);
  const numPages = validateNumPages(req, res);

  const newBook = {
    id: ++identifierId,
    title: title,
    author: author,
    year: year,
    numPages: numPages,
  };

  books.push(newBook);

  return res.status(200).json(newBook);
};

const updateBook = (req, res) => {
  const id = validateId(req, res);
  const title = validateTitle(req, res);
  const author = validateAuthor(req, res);
  const year = validateYear(req, res);
  const numPages = validateNumPages(req, res);

  const bookFound = books.find(book => {
    return book.id === Number(id);
  });
  if (!bookFound) {
    return res.status(404).json({
      message: 'Não existe livro a ser substituído para o ID informado.',
    });
  }

  bookFound.title = title;
  bookFound.author = author;
  bookFound.year = year;
  bookFound.numPages = numPages;

  return res.status(200).json({
    message: 'Livro substituído.',
  });
};

const updateSpecificInfo = (req, res) => {
  const id = validateId(req, res);
  const chaves = Object.keys(req.body);
  const { title, author, year, numPages } = req.body;

  const bookFound = books.find(book => {
    return book.id === Number(id);
  });
  if (!bookFound) {
    return res.status(404).json({
      message: 'Não existe livro a ser alterado para o ID informado.',
    });
  }

  for (chave of chaves) {
    switch (chave) {
      case 'title':
        {
          bookFound.title = title;
        }
        break;
      case 'author':
        {
          bookFound.author = author;
        }
        break;
      case 'year':
        {
          bookFound.year = year;
        }
        break;
      case 'numPages':
        {
          bookFound.numPages = numPages;
        }
        break;
    }
  }
  return res.status(200).json({
    message: 'Livro alterado.',
  });
};

const deleteBook = (req, res) => {
  const id = validateId(req, res);

  const bookFound = books.find(book => {
    return book.id === Number(id);
  });
  if (!bookFound) {
    return res.status(404).json({
      message: 'Não existe livro a ser removido para o ID informado.',
    });
  }

  books = books.filter(book => {
    return book.id !== Number(id);
  });

  return res.status(200).json({
    message: 'Livro removido.',
  });
};

module.exports = {
  listBooks,
  listSpecificBook,
  registerBook,
  updateBook,
  updateSpecificInfo,
  deleteBook,
};
