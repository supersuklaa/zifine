import app from './app';
import view from './view';
import router from './router';
import { loadPages } from './utils';

const node = document.getElementById('app');

loadPages()
  .then((pages) => {
    app(node, view, { pages });
    router();
  })
  .catch((err) => console.log('Woops', err));
