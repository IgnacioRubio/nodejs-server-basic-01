// -- DEPENDENCIES --

// environment variables
const varEnv = require('./util/env');

// utilities for working with directories and files
const path = require('path');

// routes
const projectNameRoutes = require('./routes/projectName');

// express dependencie
const express = require('express');

const app = express();

// -- LOGIC --

// check for environment variables not defined
if (varEnv.envUndefined().length > 0) {
  varEnv.envUndefined().forEach(function(errorMessage) {
    throw new Error(errorMessage);
  });
}

// exposed public folder
app.use(express.static(path.join(__dirname, 'public')));

// serving routes
app.use(projectNameRoutes);

// other requests
app.use((req, res, err) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// running server
app.listen(varEnv.portNumber, () => {
  console.log("Server running at " + new Date());
  console.log("Server listening on port " + varEnv.portNumber);
});