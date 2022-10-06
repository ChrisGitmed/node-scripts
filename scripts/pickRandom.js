import { Shade } from 'js-shade';
import { argv } from 'dark-args';

/**
 * Picks a random selection of items from an array and logs them
 * to the console.
 *
 * Invoke the script like this:
 * node scripts/pickRandom.js --arr='[1,2,3]' --n=1
 *
 * @param {JSON} arr - A JSON Array to select from
 * @param {Number} n - The number of items to select
 */
export const pickRandom = async (arr, n) => {
  if (!arr || !n) {
    console.log(`Check params. Both ${Shade.red('arr')} and ${Shade.red('n')} are required.`);
    return;
  }

  const selection = [];
  const items = JSON.parse(arr);
  for (let i = 0; i < n; i++) {
    selection.push(...items.splice(Math.floor(Math.random() * items.length), 1));
  }
  console.log('selection: ', selection)
};

(async () => {
  await pickRandom(argv.arr, argv.n);
  process.exit(0);
})();
