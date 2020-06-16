const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token =req.header('Auth-token');
    if (!token) return res.status(401).send('Acces Denied');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        console.log('vs etes bien connecter')
        req.userid =verified;
        next();
    } catch (e) {
        console.log(e)
        return res.status(400).send('Invalid Token');
    }
}