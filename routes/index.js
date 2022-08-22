const router = require('express').Router();

// import all
const apiRoutes = require('./api');

// add /api to all routes
router.use('/api', apiRoutes);

// error status message
router.use((req, res) => {
  res.status(404).send('<h1>404 Error</h1>');
});

module.exports = router;