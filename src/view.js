import { h } from 'superfine';
import { tree } from './app';

import { Link } from './router';

const Button = ({ count }, children) => (
  <span>
    {children} {count}
  </span>
);

export default () => {
  const updateCount = (value) => tree.select('count').set(value);

  const { site, count } = tree.get();

  return (
    <div class={site} id='xxx'>
      <h1>{count}</h1>
      <h2>{site}</h2>
      <button onclick={() => updateCount(count - 1)}>-</button>
      <button onclick={() => updateCount(count + 1)}>+</button>
      <Link href='/'>Home22</Link>
      <Link href='/products'>about</Link>
      <Button count={count}>chilll</Button>
    </div>
  );
};
