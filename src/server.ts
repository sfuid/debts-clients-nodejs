import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as helmet from 'koa-helmet';
import * as cors from '@koa/cors';
import * as winston from 'winston';
import 'reflect-metadata';

import { logger } from './logging';
import { router } from './routes';
import { config } from './config';

const app = new Koa();

app.use(helmet());
app.use(cors());
app.use(logger(winston));
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(config.port);
console.log(`Server running on port ${config.port}`);
