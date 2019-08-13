import { BaseContext } from 'koa';
import { pool } from '../database';

export default class PersonController {
  public static async updatePerson(ctx: BaseContext) {
    const id_person = ctx.request.body.id_person;
    const fio = ctx.request.body.fio;

    await pool.query('UPDATE person SET fio = $1 WHERE id_person = $2', [fio, id_person]);

    ctx.status = 201;
    ctx.body = `Person modified. ID: ${id_person}`;
  }
}
