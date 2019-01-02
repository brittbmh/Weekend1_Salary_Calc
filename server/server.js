const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.static('server/public'));

const staff = []; 




app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});