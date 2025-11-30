// Netlify Function to get API URL
// This allows the frontend to get the API URL without exposing it in the code

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            apiUrl: process.env.VITE_API_URL || 'http://localhost:3000/api'
        })
    };
};

