import { h, patch } from 'superfine';
import Navigo from 'navigo';
import Baobab from 'baobab';

const router = new Navigo(null);

const node = document.getElementById('app');

const tree = new Baobab({
  site: 'Home',
  count: 0,
});
const cursor = tree.select();

const Button = ({ count }, children) => (
  <span>
    {children} {count}
  </span>
);

const Link = ({ href }, children) => {
  const props = {
    onclick: (e) => {
      e.preventDefault();
      router.navigate(href);
    },
    href,
  };

  return (
    <a {...props}>{children}</a>
  );
};

const setState = (state) => {
  Object.keys(state).map((key) => cursor.set(key, state[key]));
  patch(node, view(tree.get()));
};

const view = ({ site, count }) => (
  <div class={site} id='xxx'>
    <h1>{count}</h1>
    <h2>{site}</h2>
    <button onclick={() => setState({ count: count - 1 })}>-</button>
    <button onclick={() => setState({ count: count + 1 })}>+</button>
    <Link href='/'>Home22</Link>
    <Link href='/products'>about</Link>
    <Button count={count}>chilll</Button>
  </div>
);

router
  .on({
    'products/:id': () => setState({ site: 'Products' }),
    'products': () => setState({ site: 'About' }),
    '*': () => setState({ site: 'Home' }),
  })
  .resolve();
