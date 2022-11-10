const cron = require("node-cron");
const express = require("express");

app = express(); // Initializing app
cron.schedule("*/10 * * * * *", function() {
    console.log("running a task every 10 second");
});
app.listen(4000);