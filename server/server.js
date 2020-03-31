const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found!',
        name: 'Todo App v1.0'
    });
});

//GET /users
//Give users a name prop and a age prop
app.get('/users', (req, res) => {
    res.send([{
        name: 'Max',
        age: 21
    }, {
        name: 'Isatai',
        age: 20
    }, {
        name: 'Guy',
        age: 37
    }]);
});

app.listen(3000, () => {
    console.log('Server is up for port 3000');
});

module.exports.app = app;