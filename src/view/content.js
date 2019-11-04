import { h } from 'superfine';
import { tree } from '../app';
import { formatDate } from '../utils';

export default () => {
  const { buffering, page } = tree.get();

  if (!page) {
    return (
      <section class='content inactive'>
      </section>
    );
  }

  const css = ['content'];
  const pid = `page-${page.id}`;

  if (buffering) {
    css.push('inactive');
  } else {
    setTimeout(() => {
      document.getElementById(pid).innerHTML = page.body;
    });
  }

  const date = formatDate(page.date);

  return (
    <section class={css.join(' ')}>
      <div class='site-title'>
        <h1>{page.title}</h1>
        <div class='site-date'>{date}</div>
      </div>
      <div id={pid}></div>
    </section>
  );
};
