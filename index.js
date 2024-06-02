require('dotenv').config();

const app = require('./server.handle.js');

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})