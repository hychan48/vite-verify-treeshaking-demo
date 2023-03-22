/**
 * For namespacing / scoping purposes. using nested functions
 * then will export them to the module for unit testing
 *
 * want to see if function is declared over and over again
 *
 * defining on object.prototype will make it stay
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#performance_considerations
 * or just make a class.
 */
class a {

  static b(){
    console.log('from b');
  }
  run(){
    this.constructor.b()
  }
}
new a().run()
const b = a.b
export {a,b}









//------------------
// function a(){
//   function b(){
//     console.log('from b');
//   }
//
//   this.prototype.b = b // kinda nasty
// }
// // can't extract b without using closure or prototype
// // export {a}
// const b = a.prototype.b
// export {a,b}


/**
function t() {
  function o() {
    console.log("from b");
  }
  this.prototype.b = o;
}
 const n = t.prototype.b;
 export {
  t as a,
  n as b
};

 */
