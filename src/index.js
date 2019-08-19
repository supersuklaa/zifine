import { h, patch } from 'superfine';

import app from './app';
import view from './view';
import router from './router';

const node = document.getElementById('app');

const state = {
  site: 'Home',
  count: 0,
};

app(node, view, state);

router();
