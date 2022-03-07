import { Router } from 'express'
import * as userController from '../Controllers/userController'
import  movieController from '../Controllers/movieController'

const routes = Router()

routes.post('/users', userController.createUser);
routes.get('/users', userController.getUsersData);

routes.post('/movie', movieController.create);
routes.get('/movie', movieController.index);



routes.get('/healt', (req, res) => {
  console.log('app is working')
  return res.send('app is working').status(200)
})

export default routes
