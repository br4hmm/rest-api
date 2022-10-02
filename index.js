const express = require('express');
const morgan = require('morgan');

const tasksRoutes = require('./routes/tasks');

const app = express();
const port = 5000;

app.listen(port, console.log(`Server is running on port ${port}...`));

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/tasks', tasksRoutes);
