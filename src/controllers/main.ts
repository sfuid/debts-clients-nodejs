import { BaseContext } from 'koa';

export default class MainController {
  public static async home(ctx: BaseContext) {
    ctx.body = 'debts-nodejs api';
  }
}
