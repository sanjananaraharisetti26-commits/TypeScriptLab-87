const express = require('express');
const app = express();
const PORT = 3004;
app.use(express.json());
app.use((req, res, next) => {
    const time = new Date().toLocaleString();
    console.log(`[${time}] ${req.method} request received at ${req.url}`);
    next();
});
app.use((req, res, next) => {
    const browser = req.get('User-Agent');
    if (!browser) {
        return res.status(400).json({
            error: 'User-Agent header is required'
        });
    }
    next();
});
let books = [
    { id: 101, title: 'Java Programming' },
    { id: 102, title: 'Node.js Basics' }
];
app.get('/books', (req, res) => {
    res.json(books);
});
app.post('/books', (req, res) => {
    const newBook = {
        id: req.body.id != null ? req.body.id : books.length + 101,
        title: req.body.title
    };
    books.push(newBook);
    res.status(201).json(newBook);
});
app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);
    if (book) {
        book.title = req.body.title;
        res.json({
            message: 'Book updated successfully',
            book
        });
    } else {
        res.status(404).json({
            error: 'Book not found'
        });
    }
});
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    books = books.filter(b => b.id !== id);
    res.json({
        message: `Book ${id} deleted`,
        remainingBooks: books
    });
});
app.listen(PORT, () => {
    console.log('----------------------------------------------');
    console.log(`Book API with logging running at http://localhost:${PORT}`);
    console.log('Waiting for requests...');
    console.log('----------------------------------------------');
});
