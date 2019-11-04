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

export const getMenuItems = () => new Promise((resolve, reject) => {
  fetch(`${process.env.API_URL}/menus/main`)
    .then((response) => response.json())
    .then((response) => {
      const items = response.map((item) => ({
        id: item['object_id'], // eslint-disable-line dot-notation
        label: item.title,
      }));

      resolve(items);
    })
    .catch((err) => reject(err));
});

export const getPage = (item) => new Promise((resolve) => {
  fetch(`${process.env.API_URL}/wp/v2/pages/${item.id}`)
    .then((response) => response.json())
    .then(({ title, content, acf, date, slug }) => resolve({
      id: item.id,
      title: title.rendered,
      label: item.label,
      date,
      slug,
      body: content.rendered,
      imageUrl: acf.hero_image.url,
      colors: { light: acf.light_color, dark: acf.dark_color },
    }));
});

const loadPageBgs = (pages) => new Promise((resolve) => {
  pages.forEach(({ imageUrl }) => {
    (new Image()).src = imageUrl;
  });

  resolve(pages);
});

export const loadPages = () => new Promise((resolve) => {
  getMenuItems().then((items) => {
    Promise.all(items.map((item) => getPage(item)))
      .then((pages) => loadPageBgs(pages))
      .then((pages) => resolve(pages));
  });
});

const turnPageTo = (page) => {
  tree.select('buffering').set(true);

  setTimeout(() => {
    document.body.style.backgroundImage = `url('${page.imageUrl}')`;
    setCSS('--light-color', page.colors.light);
    setCSS('--dark-color', `${page.colors.dark}dd`);
  }, 200);

  setTimeout(() => {
    tree.select('page').set(page);
    tree.select('buffering').set(false);

    document.title = page.title;
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
