require('dotenv').config();

const app = require('./server.handle.js');

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})