
const express = require('express')
const app = express()
const port = 3000

// Все файлы и так лежат в нужной директории, по сути весь проект это статика. Я ее настроил как сказано в задании "Настройте Node.JS сервер на express с раздачей статики — файла index.html."
app.use('/', express.static(__dirname + '/public/'))

// app.get('/', function(req, res) {
//     res.sendfile('public/index.html');
// });
//
// app.get('/404', function(req, res) {
//     res.sendfile('public/404.html');
// });
//
// app.get('/500', function(req, res) {
//     res.sendfile('public/500.html');
// });
//
// app.get('/chat', function(req, res) {
//     res.sendfile('public/index.html');
// });
//
// app.get('/login', function(req, res) {
//     res.sendfile('public/index.html');
// });
// app.get('/signup', function(req, res) {
//     res.sendfile('public/index.html');
// });
// app.get('/settings', function(req, res) {
//     res.sendfile('public/index.html');
// });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})