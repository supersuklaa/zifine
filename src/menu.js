import { h } from 'superfine';

import { Link } from './router';

export default () => (
  <nav>
    <ul>
      <li>
        <Link href='/'>Koti</Link>
      </li>
      <li>
        <Link href='/products'>about</Link>
      </li>
    </ul>
  </nav>
);
