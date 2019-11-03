import { tree } from './app';

export const setCSS = (key, value) => {
  const root = document.documentElement;
  root.style.setProperty(key, value);
};

export const setSite = (value) => {
  tree.select('buffering').set(true);

  fetch(`${process.env.API_URL}/wp/v2/pages/${value}`)
    .then((response) => response.json())
    .then(({ title, content, acf, id }) => {
      document.body.style.backgroundImage = `url('${acf.hero_image.url}')`;

      setTimeout(() => {
        setCSS('--light-color', acf.light_color);
        setCSS('--dark-color', `${acf.dark_color}dd`);
      }, 300);

      return {
        body: content.rendered,
        buffering: false,
        id,
        title: title.rendered,
      };
    })
    .then((args) => setTimeout(() => tree.merge(args), 500));
};
