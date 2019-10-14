/*  
Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.
*/
function Node(val) {
  return {
    value: val,
    left: null,
    right: null,
    setLeft: function(left) {
      this.left = left
    },
    setRight: function(right) {
      this.right = right
    },
    leftChild: function() {
      return this.left;
    },
    rightChild: function() {
      return this.right;
    }
  };
}

function makeBST(arr, start, end) {
  if (end < start) {
    return;
  } else {
    let mid = (start + end)/2;
    let node = Node(arr[mid]);
    node.setLeft(makeBST(arr, start, mid - 1));
    node.setRight(makeBST(arr, mid + 1, end));
    return node;
  }
}

function BST(arr) {
  return makeBST(arr, 0, arr.length - 1);
}

let arr = [1,2,3,4,7,10,15];
const bst = BST(arr);
console.log(bst);