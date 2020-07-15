import { celebrate, Joi } from 'celebrate';
import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import ItensController from './controllers/ItensController';
import PointsController from './controllers/PointsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointController = new PointsController();
const itemController = new ItensController();

routes.get('/itens', itemController.index);

routes.post(
  '/points',
  upload.single('image'),
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        itens: Joi.string().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  pointController.create
);
routes.get('/points', pointController.index);
routes.get('/points/:id', pointController.show);

export default routes;
