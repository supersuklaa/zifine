import { h } from 'superfine';
import Navigo from 'navigo';

import { setSite } from './utils';

const router = new Navigo(process.env.ROOT_URL || null);

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
  router.on({
    '/page/:id': ({ id }) => setSite(id), // eslint-disable-line quote-props
    '*': () => setSite(process.env.FRONTPAGE_ID),
  }).resolve();
};
