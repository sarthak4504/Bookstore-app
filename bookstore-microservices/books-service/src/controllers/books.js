let books = [
  { id: 1, title: "Book One", author: "Author A" },
  { id: 2, title: "Book Two", author: "Author B" }
];

exports.getAllBooks = (req, res) => res.json(books);
exports.getBookById = (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  book ? res.json(book) : res.status(404).send("Book not found");
};
exports.createBook = (req, res) => {
  const book = req.body;
  books.push(book);
  res.status(201).json(book);
};