const express = require('express');
const router = express.Router();

// Function mapping based on the last digit of your ID (3)
const mathFunctions = [
    Math.imul,   // 27
    Math.log,    // 28
    () => Math.log(10) // 29, log(10) is a constant value
];

// Define the / route for the computation
router.get('/', (req, res) => {
    let x;

    // Check if there is a query parameter 'x'
    if (req.query.x) {
        x = parseFloat(req.query.x);
    } else {
        // Generate a random integer between 0 and 100
        x = Math.floor(Math.random() * 100);
    }

    // Apply each function
    const results = mathFunctions.map((fn, index) => {
        // For Math.imul, we need two parameters
        if (fn === Math.imul) {
            return `${fn.name} applied to ${x} and 1 is ${fn(x, 1)}`;
        }
        // For log functions
        return `${fn.name} applied to ${x} is ${fn(x)}`;
    });

    // Join the results into a single response string
    const responseMessage = results.join('<br>');

    // Return the response
    res.send(responseMessage);
});

// Export the router
module.exports = router;
