const express = require('express');
const cors = require('cors');
const routes = require('./routes');
require('./database'); // This will connect to the database and seed it

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
