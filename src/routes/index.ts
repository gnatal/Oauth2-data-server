import { Router } from 'express'
import  movieController from '../Controllers/movieController'
import  bookController from '../Controllers/bookController'

const routes = Router()

routes.post('/movie', movieController.create);
routes.get('/movie', movieController.index);
routes.post('/movieComment', movieController.comment);

routes.post('/book', bookController.create);
routes.get('/book', bookController.index);
routes.post('/book_comment', bookController.comment);

routes.get('/healt', (req, res) => {
  console.log('app is working')
  return res.send('app is working').status(200)
})

export default routes
