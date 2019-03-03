// -- DEPENDENCIES --

// environment variables
const varEnv = require('./util/env');

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




// running server
app.listen(varEnv.portNumber, () => {
  console.log("Server running at " + new Date());
  console.log("Server running on port " + varEnv.portNumber);
});