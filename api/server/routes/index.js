import express from 'express';
var homeRouter = express.Router();


/* GET home page. */
homeRouter.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

export default homeRouter
