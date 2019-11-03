import { h } from 'superfine';

import { Link } from '../router';
import { tree } from '../app';

const ListItem = ({ item }) => {
  const css = [];
  const id = +item.id;

  if (id === tree.get('id')) {
    css.push('active');
  }

  const href = +process.env.FRONTPAGE_ID === id ? '/' : `/page/${id}`;

  return (
    <li class={css.join(' ')}>
      <Link href={href}>{item.title}</Link>
    </li>
  );
};

export default () => (
  <nav>
    <ul>
      {tree.get('pages').map((item) => (
        <ListItem item={item} />
      ))}
    </ul>
  </nav>
);
