import { Hono } from 'hono';
import { questionApi } from './questions.routes.js';

export const api = new Hono();

const routes = [
  {
    href: '/',
    methods: ['GET'],
  },
];

api.get('/', (c) => c.json(routes));
api.route('/questions', questionApi);
