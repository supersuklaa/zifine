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
  const setSite = (value) => tree.select('site').set(value);

  router
    .on({
      'products:/:id': () => setSite('About'),
      'products': () => setSite('Products'), // eslint-disable-line quote-props
      '*': () => setSite('Home'),
    })
    .resolve();
};
