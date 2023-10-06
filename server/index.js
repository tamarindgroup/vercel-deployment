const express = require('express');
const app = express();

app.use("/", (req, res) => {
    res.send("Server is running");
});

app.listen(5008, console.log("Server started on PORT 5008"));