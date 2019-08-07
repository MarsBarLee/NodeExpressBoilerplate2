const express = require('express');
const app = express();
const morgan = require('morgan')
const port = 4000;

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
    console.log(`Server has started on Port ${port}`);
})

app.get('/api/students', (req, res) => {
    const students = [
        { id: 1, firstName: 'John', lastName: 'Doe'},
        { id: 1, firstName: 'Alice', lastName: 'Wheezer'},
        { id: 1, firstName: 'Carl', lastName: 'Keen'}
    ];
    res.json(students)
});