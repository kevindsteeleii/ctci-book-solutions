/*  
Check Balanced: Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.
*/

function BT_Node(value) {
  this.value = value;
  this.left = undefined;
  this.right = undefined;
  this.add = function(val) {
    if(this.value >= val) {
      this.left = this.BT_Node(val);
    } else {
      this.right = this.BT_Node(val);
    }
  }
}

function BST(head) {
  this.head = head;
  this.add = function(val) {
    let curr = this.head;
    while (curr) {
      if (curr.value > val) {
        curr = curr.left;
        if (curr === undefined) {
          curr = new BT_Node(val)
          break;
        } 
      } else {
        curr = curr.right;
        if (curr === undefined) {
          curr = new BT_Node(val)
          break;
        }
      }
    }
  }
}

const head = new BT_Node(12);
const BTree = new BST(head)
console.log(BTree);