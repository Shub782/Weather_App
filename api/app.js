const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.get('/', (req, res) => {
    res.render("index", {
        weather: null,
        error: null
    });
});

app.post('/weather', async (req, res) => {
    try {
        const city = req.body.city;
        const apikey = "const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.get('/', (req, res) => {
    res.render("index", {
        weather: null,
        error: null
    });
});

app.post('/weather', async (req, res) => {
    try {
        const city = req.body.city;
        const apikey = "e0743ecfb2390c8710aa33cdd25346fe";

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

        const result = await axios.get(url);

        res.render("index", {
            weather: result.data,
            error: null
        });

    } catch (error) {
        res.render("index", {
            weather: null,
            error: "City not found!"
        });
    }
});

module.exports = app;";

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

        const result = await axios.get(url);

        res.render("index", {
            weather: result.data,
            error: null
        });

    } catch (error) {
        res.render("index", {
            weather: null,
            error: "City not found!"
        });
    }
});

module.exports = app;
