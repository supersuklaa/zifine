import { h } from 'superfine';

// import Header from './header';
import Content from './content';
import Menu from './menu';

export default () => (
  <div class='holder'>
    <Menu />
    <div class='max-width'>
      {/* <Header /> */}
      <Content />
    </div>
  </div>
);
