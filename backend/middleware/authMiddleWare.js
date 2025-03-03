const { readSessions } = require('../models/sessionModel');

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ success: false, message: 'Unauthorized' });

    let session = readSessions().find(s => s.token === token);
    if (!session) return res.status(401).json({ success: false, message: 'Invalid or expired session' });

    req.userId = session.userId;
    next();
};

module.exports = { authenticate };
