import express from 'express';
var homeRouter = express.Router();


/* GET home page. */
homeRouter.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});

homeRouter.post('/test', async (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      message: "success"
    }
  })
})

export default homeRouter
