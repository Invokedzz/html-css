const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

if (require.main === module) {
app.listen(port, function () {
    console.log(`Access http://localhost:${port}`);
    });
}

if (require.main !== module) module.exports = app;