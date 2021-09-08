const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(
    path.join(__dirname, 'dist', 'PrimerProyectoTest')));
app.listen(process.env.PORT || 8080);
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'PrimerProyectoTest', 'index.html'));
});
console.log('Build successful!!');