import { h } from 'superfine';

import Header from './header';
import Content from './content';
import Menu from './menu';

export default () => (
  <div class='max-width'>
    <Header />
    <Menu />
    <Content />
  </div>
);
