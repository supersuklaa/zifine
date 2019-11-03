import { h } from 'superfine';

import { Link } from './router';
import { tree } from './app';

export default () => {
  const { pages, id } = tree.get();

  return (
    <nav>
      <ul>
        {pages.map((p) => (
          <li class={+p.id === id ? 'active' : null}>
            <Link href={`/page/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
