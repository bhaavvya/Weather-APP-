const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 200;

// Set up the paths
const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../views');

// Set the view engine and views directory
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Serve static files from the public directory
app.use(express.static(publicPath));

// Define routes
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/weather', (req, res) => {
  res.render('weather');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});
// Catch-all route for 404 errors
app.get('*', (req, res) => {
  res.render('404');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
