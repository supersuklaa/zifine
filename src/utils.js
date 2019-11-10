import { tree } from './app';

export const setCSS = (key, value) => {
  const root = document.documentElement;
  root.style.setProperty(key, value);
};

export const formatDate = (date = '') => {
  const opt = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateObj = new Date(date);

  return dateObj.toLocaleDateString('en-US', opt);
};

export const getMenuItems = () => fetch(`${process.env.API_URL}/menus/main`)
  .then((response) => response.json())
  .then((response) => response.map((item) => ({
    id: item['object_id'], // eslint-disable-line dot-notation
    label: item.title,
  })));

export const getPage = (item) => fetch(`${process.env.API_URL}/wp/v2/pages/${item.id}`)
  .then((response) => response.json())
  .then(({ title, content, acf, date, slug }) => ({
    id: item.id,
    title: title.rendered,
    label: item.label,
    date,
    slug,
    body: content.rendered,
    imageUrl: acf.hero_image.url,
    colors: { light: acf.light_color, dark: acf.dark_color },
  }));

const loadPageBgs = (pages) => {
  pages.forEach(({ imageUrl }) => {
    (new Image()).src = imageUrl;
  });

  return pages;
};

export const loadPages = () => getMenuItems()
  .then((items) => Promise.all(items.map(getPage)))
  .then((pages) => loadPageBgs(pages));

const turnPageTo = (page) => {
  tree.select('buffering').set(true);

  setTimeout(() => {
    document.body.style.backgroundImage = `url('${page.imageUrl}')`;
  }, 200);

  setTimeout(() => {
    tree.select('page').set(page);
    tree.select('buffering').set(false);

    document.title = page.title;
    setCSS('--light-color', page.colors.light);
    setCSS('--dark-color', `${page.colors.dark}dd`);
  }, 500);
};

export const changeToPageBySlug = (slug) => {
  const page = tree.get('pages', (p) => p.slug === slug);

  turnPageTo(page);
};

export const changeToPageById = (id) => {
  const page = tree.get('pages', (p) => p.id === id);

  turnPageTo(page);
};
