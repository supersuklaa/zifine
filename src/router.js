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

const setCSS = (key, value) => {
  const root = document.documentElement;
  root.style.setProperty(key, value);
};

const setSite = (value) => {
  tree.select('thinking').set(true);
  setTimeout(() => {
    fetch(`${process.env.API_URL}/wp/v2/pages/${value}`)
      .then((response) => response.json())
      .then(({ title, content, acf, id }) => {
        tree.select('title').set(title.rendered);
        tree.select('id').set(id);
        tree.select('body').set(content.rendered);
        tree.select('thinking').set(false);

        setCSS('--light-color', acf.light_color);
        setCSS('--dark-color', `${acf.dark_color}dd`);
        document.body.style.backgroundImage = `url('${acf.hero_image.url}')`;
      });
  }, 500);
};

export default () => {
  router
    .on({
      'page/:id': ({ id }) => setSite(id), // eslint-disable-line quote-props
      '*': () => setSite('2'),
    })
    .resolve();
};
