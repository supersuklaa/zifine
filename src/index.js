import { h, patch } from 'superfine';

import app from './app';
import view from './view';
import router from './router';

const node = document.getElementById('app');

fetch(`${process.env.API_URL}/menus/main`)
  .then((response) => response.json())
  .then((response) => {
    const pages = response.map((page) => ({
      id: page['object_id'], // eslint-disable-line dot-notation
      title: page.title,
    }));
    app(node, view, { pages });
  });

router();
