import Baobab from 'baobab';
import { patch } from 'superfine';

export const tree = new Baobab();

const start = (node, view, state = {}) => {
  tree.on('update', () => patch(node, view()));

  tree.select().set(state);

  return tree;
};

export default start;
