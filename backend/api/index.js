const express = require('express');
const cors = require('cors');

const corsOptions = {
    origin: 'https://bfhl-frontend-74ebfbl9m-arpit-sagars-projects.vercel.app/', // Replace with your actual Netlify domain
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const app = express();

// app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('BFHL Backend is running');
  }); 

app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    let numbers = data.filter(value => !isNaN(value));
    let alphabets = data.filter(value => isNaN(value));

    let lowercaseAlphabets = alphabets.filter(char => char === char.toLowerCase());
    let highest_lowercase_alphabet = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().pop()] : [];

    res.json({
        is_success: true,
        user_id: "arpit_sagar_26_03_2004",
        email: "am7136@srmist.edu.in",
        roll_number: "RA2111028010180",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highest_lowercase_alphabet
    });
});

module.exports = app;