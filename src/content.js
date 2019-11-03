import { h } from 'superfine';
import { tree } from './app';

export default () => {
  const { title, body, thinking, id } = tree.get();

  const css = ['content'];
  const pid = `page-${id}`;

  if (thinking) {
    css.push('inactive');
  } else if (body) {
    setTimeout(() => {
      document.getElementById(pid).innerHTML = body;
    });
  }

  return (
    <section class={css.join(' ')}>
      <h1 class='site-title'>{title}</h1>
      <div id={pid}></div>
    </section>
  );
};
