const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((res, req, next) => {
    res.end('Will send all the dishes to you');
})
.post((res, req, next) => {
    res.end('Will add the dish: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.put((res, req, next) => {
    res.statusCode = 403
    res.end('PUT operation not supported on /dishes');
})
.delete((res, req, next) => {
    res.end('Deleting all the dishes to you');
});

module.exports = dishRouter;