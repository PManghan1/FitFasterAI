const express = require('express');
const app = express();
const { auth } = require('express-oauth2-jwt-bearer');
const cors = require('cors');

const port = process.env.PORT || 8080;

const jwtCheck = auth({
  audience: 'FitFaster',
  issuerBaseURL: 'https://dev-ee6bgom2rydd848w.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});

// Enable CORS
app.use(cors());

// enforce on all endpoints
app.use(jwtCheck);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

app.listen(port);

console.log('Running on port ', port);