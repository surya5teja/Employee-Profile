const express = require('express');
const app = express();
const path = require('path');
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/src/employee-profile'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/employee-profile/index.html'));
  });

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);