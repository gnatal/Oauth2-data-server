import { Router } from 'express'
import  movieController from '../Controllers/movieController'
import  bookController from '../Controllers/bookController'
import { checkAuth } from '../middlewares/auth'

const routes = Router()

routes.post('/movie',[checkAuth] , movieController.create);
routes.get('/movie', movieController.index);
routes.post('/movie_comment', movieController.comment);

routes.post('/book', bookController.create);
routes.get('/book', bookController.index);
routes.post('/book_comment', bookController.comment);

routes.get('/healt', (req, res) => {
  console.log('app is working')
  return res.send('app is working').status(200)
})

export default routes
