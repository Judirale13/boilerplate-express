const express = require('express');
let app = express();
app.get("/", function (req, res) {
    absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
    res.json({ "message": "Hello json" })
});
app.get("/json", function (req, res) {
    const messageJson = "Hello json";
    let message;
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        message = messageJson.toUpperCase();
    } else {
        message = messageJson;
    }
    const data = {
        "message": message
    };
    res.json(data);
});
app.use("/public", express.static(__dirname + '/public'));

































module.exports = app;
