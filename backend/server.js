const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

const port = 3000;



// POST Route for /bfhl
app.post('/bfhl', (req, res) => {
    try {
        console.log('Received request body:', req.body); // Log the request body to check if it's correct
        
        const { data } = req.body; // Check if data exists and is correctly parsed
        if (!data || !Array.isArray(data)) {
            throw new Error('Invalid data format'); // Add a check for correct data format
        }

        // Logic to separate numbers and alphabets
        let numbers = data.filter(value => !isNaN(value));
        let alphabets = data.filter(value => isNaN(value));

        // Finding the highest lowercase alphabet if exists
        let lowercaseAlphabets = alphabets.filter(char => char === char.toLowerCase());
        let highest_lowercase_alphabet = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().pop()] : [];

        // Response object
        let response = {
            is_success: true,
            user_id: "arpit_sagar_26_03_2004",
            email: "am7136@srmist.edu.in",
            roll_number: "RA2111028010180",
            numbers: numbers,
            alphabets: alphabets,
            highest_lowercase_alphabet: highest_lowercase_alphabet
        };

        res.json(response);
    } catch (error) {
        console.error('Error occurred in the backend:', error.message); // Log the error message
        res.status(500).json({ error: 'An internal server error occurred.' });
    }
});

// GET Route for /bfhl
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        "operation_code": 1
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
 