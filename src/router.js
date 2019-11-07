import { h } from 'superfine';
import Navigo from 'navigo';

import { changeToPageById, changeToPageBySlug } from './utils';

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
    '/:slug': ({ slug }) => changeToPageBySlug(slug),
    '*': () => changeToPageById(process.env.FRONTPAGE_ID),
  }).resolve();
};
