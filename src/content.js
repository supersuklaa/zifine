import { h } from 'superfine';
import { tree } from './app';

export default () => {
  const updateCount = (value) => tree.select('count').set(value);
  const updateBody = (value) => tree.select('body').set(value);

  const { site, body, thinking } = tree.get();

  const css = ['content', site];

  if (thinking) {
    css.push('inactive');
  }

  return (
    <section class={css.join(' ')}>
      <h1>Moi!</h1>
      <h2>{site}</h2>
      <p>
        {body}
      </p>
    </section>
  );
};
