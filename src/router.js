import { h } from 'superfine';
import Navigo from 'navigo';

import { tree } from './app';

const router = new Navigo(null);

export const Link = (props, children) => {
  const onclick = (e) => {
    e.preventDefault();
    router.navigate(props.href);
  };

  return (
    <a {...props} onclick={onclick}>
      {children}
    </a>
  );
};

export default () => {
  const setSite = (value) => {
    tree.select('thinking').set(true);
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
        .then((response) => response.json())
        .then(({ title, body }) => {
          tree.select('site').set(title.split(' ').slice(0, 3).join(' '));
          tree.select('body').set(body);
          tree.select('thinking').set(false);
        });
    }, 500);
  };

  router
    .on({
      'products:/:id': () => setSite('About'),
      'products': () => setSite('60'), // eslint-disable-line quote-props
      '*': () => setSite('1'),
    })
    .resolve();
};
