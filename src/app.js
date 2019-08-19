import Baobab from 'baobab';
import { patch } from 'superfine';

export const tree = new Baobab();

const start = (node, view, state = {}) => {
  tree.on('update', () => patch(node, view()));

  tree.select().set(state);

  // const mutationObserver = new MutationObserver((mutations) => {
  //   mutations.forEach((mutation) => {
  //     if (mutation.target.classList.contains('inactive')) {
  //       setTimeout(() => {
  //         mutation.target.classList.remove('inactive');
  //       }, 200);
  //     }
  //   });
  // });

  // mutationObserver.observe(node, {
  //   attributes: true,
  //   subtree: true,
  // });

  return tree;
};

export default start;
