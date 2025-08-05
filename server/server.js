const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const mongoose = require('mongoose'); // mongoose'u import et
const seed = require('./seed'); // seed fonksiyonunu import et

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api', routes);

// MongoDB bağlantısı kurulduktan sonra seed fonksiyonunu çağır
mongoose.connection.once('open', () => {
  seed();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});