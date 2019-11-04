import { h } from 'superfine';

import { Link } from '../router';
import { tree } from '../app';

const ListItem = ({ item }) => {
  const css = [];
  const { id, label } = item;

  const page = tree.get('page');

  if (page && id === page.id) {
    css.push('active');
  }

  const href = process.env.FRONTPAGE_ID === id ? '/' : `/page/${id}`;

  return (
    <li class={css.join(' ')}>
      <Link href={href}>{label}</Link>
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
