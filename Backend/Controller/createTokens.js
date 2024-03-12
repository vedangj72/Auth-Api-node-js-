// createTokens.js

const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET, { expiresIn: '1d' });
};

module.exports = createToken;