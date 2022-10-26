const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

// courses data
const courses = require('./data/courses.json');
const courseDetails = require('./data/courseDetails.json');

app.get('/', (req, res) => {
  res.send('programming library server is running');
});

app.get('/courses', (req, res) => {
  res.send(courses);
});

app.get('/courses/:id', (req, res) => {
  const id = Number(req.params.id);
  const singleCourseDetails = courseDetails.find(details => details.id === id);
  res.send(singleCourseDetails);
});

app.listen(port, () => {
  console.log(`Programming Library Server Running On Port: ${port}`);
});