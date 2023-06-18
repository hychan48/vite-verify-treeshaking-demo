/**
 * Should try json5 importing....
 * or maybe just refactor the file watcher so it's easy
 * @type {string}
 */

const hash = '#some_id'
history.pushState(null, null, hash);

// if(history.pushState) {
//   history.pushState(null, null, hash);
// }
// else {
//   location.hash = hash;
//   //old way (wonder if vite auto builds this)
// }