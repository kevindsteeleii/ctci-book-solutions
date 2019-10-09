class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  appendTail(d){
    if(!this.head) {
      this.head = new Node(d);
    } else {
      let temp = this.head;
      while(temp.next !== null) {
        temp = temp.next;
      }
      temp.next = new Node(d);
    }
  }

  appendNode(n) {
    if(!this.head) {
      this.head = n;
    } else {
      let temp = this.head;
      while(temp.next !== null) {
        temp = temp.next;
      }
      temp.next = n;
    }
  }
  
    serialAppend(args){
      if (!Array.isArray(args)) {
        console.log('Rejected');
        return;
      }
      for (let i = 0; i < args.length; i++) {
        this.appendTail(args[i]);
      } 
    }

    removeDupes() {
      const count = {};
      let temp = this.head;
      let slow = temp;
      while(temp !== undefined && temp !== null) {
        let data = temp.data;
        count[data] = count[data] + 1 || 1;
        if(count[data] > 1) {
          slow.next = temp.next;
          count[data] -= 1;
        }
        slow = temp;
        temp = temp.next;
      }
    }

  removeKthFromLast(k) {
    let temp = this.head;
    let slow = this.head;
    // run a for-loop that places the non-slow pointer k nodes away from the slow pointer
    for (let i = 0; i < k; i++) {
      if(temp.next === null) {
        return null; // Out of bounds!!!
      }
      temp = temp.next;
    }
    while(temp != null) {
      temp = temp.next;
      slow = slow.next;
    }
  }

  detect_loop() {
    let count = {}
    if(this.head === null) {
      return null;
    } else {
      let temp = this.head;
      while(temp !== null) {
        let data = temp.data;
        count[data] = count[data] + 1 || 1
        if(count[data] > 1) {
          return temp;
        }
        temp = temp.next;
      }
      return null;
    }
  }

  printList () {
    let temp = this.head;
    let printout = '';
    if(!temp) {
      printout += 'No Nodes in list';
    } else {
      while(temp !== undefined && temp !== null) {
        printout += `${temp.data} -> `;
        temp = temp.next;
      }
      printout += 'x';
    }
    return printout;
  }
}
// Tests and print outs
let list = new LinkedList();
console.log(list.printList());
list.appendTail(0);
console.log(list.printList());
list.appendTail(1);
console.log(list.printList());
list.serialAppend([2, 3, 4]);
console.log(list.printList());
list.serialAppend([4]);
console.log(list.printList());
list.removeDupes();
let node1 = new Node(4)
node1.next = new Node(0)
list.appendNode(node1)
console.log(list.printList());
console.log(list.detect_loop());
// console.log(list.printList());