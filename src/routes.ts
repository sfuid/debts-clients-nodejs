import * as Router from 'koa-router';
import controllers = require('./controllers');

const router = new Router();

// Main routes
router.get('/', controllers.main.home);

// Persons routes
router.put('/person', controllers.person.updatePerson);

// Debts routes
router.get('/debts', controllers.debts.getDebts);

export { router };
