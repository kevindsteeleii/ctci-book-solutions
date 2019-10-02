
class Stack {
  constructor() {
    this.top = null
  }

  StackNode = (d) => ({
    data: d,
    next: null
  });
  
  push = (item) => {
    if(this.top !== null) {
      let top = this.top;
      let newTop = this.StackNode(item);
      this.top = newTop;
      newTop.next = top;
    } else {
      this.top = this.StackNode(item);
    }
  }

  peek = () => {
    return this.top.data;
  }

  pop = () => {
    if(this.top == null) {
      throw new Error('No Top to pop!!')
    }
    let popped = this.top;
    this.top = this.top.next;
    return popped;
  }

  isEmpty = () => {
    return this.top == null;
  }
}

let myStack = new Stack();
myStack.push(1);
console.log(myStack);
myStack.push(2);
console.log(myStack);
myStack.push(3);
console.log(myStack);
myStack.pop();
console.log(myStack);
console.log(myStack.peek());

