import { BaseContext } from 'koa';
import { pool } from '../database';

interface IGetDebts {
  rows: object;
  count: number;
}

export default class DebtsController {
  public static async getDebts(ctx: BaseContext) {
    const sum = ctx.query.sum;
    const limit = ctx.query.limit;
    const offset = ctx.query.offset;

    const { rows } = await pool.query(
      'SELECT *, count(*) OVER() AS count FROM person p, (SELECT id_person, SUM(debt_sum) AS sum FROM debt GROUP BY id_person) d WHERE p.id_person = d.id_person AND d.sum >= $1 ORDER BY p.id_person ASC LIMIT $2 OFFSET $3',
      [sum, limit, offset]
    );

    let body: IGetDebts = { rows: [], count: 0 };

    if (rows.length > 0) {
      body = {
        rows: rows.map(row => ({
          id_person: row.id_person,
          fio: row.fio,
          sum: row.sum
        })),
        count: Number(rows.find(_ => _.count).count)
      };
    }

    ctx.status = 200;
    ctx.body = body;
  }
}
