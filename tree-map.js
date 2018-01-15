/*Tree Map

- [ ] Implement a higher order function, `map`, on the given `Tree` class using pseudoclassical instantiation

Available resources for this prompt
MDN
*/
var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(val) {
  var child = new Tree(val);
  this.children.push(child);
  return child;
}

Tree.prototype.map = function(fn) {
  var newTree = new Tree();
  //set value to value determined by mapping input tree
  newTree.value = fn(this.value);

  //run on each of the children of input tree, and push them to the children array of the new tree
  var children = this.children;

  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    var newChild = child.map(fn);
    newTree.children.push(newChild);
  }

  return newTree;
};

// Testing

var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);
var newTree = root1.map(function(value) {
  return value * 2;
});

console.log(newTree.value); // 2
console.log(newTree.children[0].value); // 4
console.log(newTree.children[1].value); // 6
console.log(newTree.children[0].children[1].value); // 10
console.log(newTree.children[1].children[1].value); // 14
console.log(root1.value); // still 1

// make new tree instance
// add to children array
// return node

/* make new instance of tree.
 * takes in callback call on base tree node value
 */
// loop over children array
// call addChild on new tree
// if new tree’s children has a length
// use map on new tree instance to add nodes to all children      throughout new tree
// return new tree

/**
 *
 * Implement a `map` method on this Tree class, using pseudoclassical instantiation.
 *
 * Map accepts a mapping function as its only argument. It traverses the tree,
 * passing each node's value into the mapping function, and generates a new
 * tree containing the results.
 *
 * So `map` should return a tree with the same structure, and different values,
 * but it should NOT modify the tree that was passed in.
 *
 * Example:
 *   var root1 = new Tree(1);
 *   var branch2 = root1.addChild(2);
 *   var branch3 = root1.addChild(3);
 *   var leaf4 = branch2.addChild(4);
 *   var leaf5 = branch2.addChild(5);
 *   var leaf6 = branch3.addChild(6);
 *   var leaf7 = branch3.addChild(7);
 *   var newTree = root1.map(function (value) {
 *     return value * 2;
 *   })
 *  newTree.value // 2
 *  newTree.children[0].value // 4
 *  newTree.children[1].value // 6
 *  newTree.children[0].children[1].value // 10
 *  newTree.children[1].children[1].value // 14
 *  root1.value // still 1
 */