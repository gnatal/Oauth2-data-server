import { Router } from 'express'
import  movieController from '../Controllers/movieController'
import  bookController from '../Controllers/bookController'

const routes = Router()

routes.post('/movie', movieController.create);
routes.get('/movie', movieController.index);


routes.post('/book', bookController.create);
// routes.get('/book', movieController.index);

routes.get('/healt', (req, res) => {
  console.log('app is working')
  return res.send('app is working').status(200)
})

export default routes
