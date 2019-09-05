const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const router  = express.Router();



app.use('/',router);
app.use(express.static('./public'));
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
});

router.get(`/sign_in`, (request, response) => {
        response.sendFile(path.join(__dirname,"./public/sign_in.html"));
});

router.get(`/log_in`, (request, response) => {
    response.sendFile(path.join(__dirname,"./public/log_in.html"));
});

router.get(`/profile`, (request, response) => {
    response.sendFile(path.join(__dirname,"./public/profile.html"));
});

router.get(`/`, (request, response) => {
    response.sendFile(path.join(__dirname,"./public/index.html"));
});




