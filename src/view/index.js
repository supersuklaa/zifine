import { h } from 'superfine';

import Content from './content';
import Menu from './menu';

export default () => (
  <div class='holder'>
    <Menu />
    <div class='max-width'>
      <Content />
    </div>
  </div>
);
