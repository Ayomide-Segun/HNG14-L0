const express = require('express');
const dataRoute = require('./routes/dataRoute');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use('/api', dataRoute);

const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));