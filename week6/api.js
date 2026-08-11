const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.json({
        message: 'Library API is running',
        status: 'Available',
        time: new Date()
    });
});
app.get('/books', (req, res) => {
    res.json([
        { bookId: 101, title: 'Java Basics', author: 'James' },
        { bookId: 102, title: 'Web Development', author: 'Robert' },
        { bookId: 103, title: 'Database Concepts', author: 'Martin' }
    ]);
});
app.get('/book/:bookId', (req, res) => {
    res.json({
        selectedBook: req.params.bookId,
        type: 'Programming',
        available: true,
        labels: ['education', 'technical']
    });
});
app.listen(PORT, () => {
    console.log(`Library server running at http://localhost:${PORT}`);
});
