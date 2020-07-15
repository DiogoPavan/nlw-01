import { Request, Response } from 'express';
import knex from '../database/connection';

class ItensController {
  async index(request: Request, response: Response) {
    const itens = await knex('itens').select('*');

    const serializedItens = itens.map((item) => {
      const { image, ...rest } = item;
      return {
        ...rest,
        image_url: `${process.env.APP_URL}:${process.env.APP_PORT}/uploads/${image}`,
      };
    });

    return response.json(serializedItens);
  }
}

export default ItensController;
