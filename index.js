require('dotenv').config();

const app = require('./server.handle.js');

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})