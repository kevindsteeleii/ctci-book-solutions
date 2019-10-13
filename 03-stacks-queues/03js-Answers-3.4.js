/*  
Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.
*/

function Stack() {
  this._stack = [];
  this.push = function (x) {
    this._stack.push(x);
  }
  this.isEmpty = function() {
    return this._stack.length === 0;
  }
  this.pop = function() {
    if (this._stack.length <= 0) {
      return
    }
    return this._stack.pop();
  }
  this.peek = function() {
    if (this._stack.length <= 0) {
      return
    }
    return this._stack[this._stack.length-1];
  }
  this.length = function() {
    return this._stack.length;
  }
  this.arr = function() {
    return this._stack;
  }
}

class MyQueue {
  regular = new Stack();
  reverse = new Stack();
  top = null;
  
  constructor() {
  }

  isEmpty() {
    return this.reverse.length === 0;
  }

  enqueue(x) {
    this.reverse.push(x);
  }

  peek() {
    return this.reverse.arr()[0];
  }

  dequeue() {
    let first;
    if (this.reverse.length <= 0) {
      return
    } else {
      // the first loop pops the reverse order items from the "main" stack into the former empty stack
      let rLength = this.reverse.length();
      for (let i = 0; i < rLength; i++) {
        let value = this.reverse.pop();

        this.regular.push(value);
      }
      first = this.regular.pop();

      for (let i = 0; i < rLength - 1 ; i++) {
        let temp = this.regular.pop();
        this.reverse.push(temp);
      }
      console.log('Reverse ' + this.reverse.arr());

    }
    return first;
  }
}

const Queue = new MyQueue();

let first = Math.ceil(Math.random()*11);
let sec = Math.ceil(Math.random()*11);
let third = Math.ceil(Math.random()*11);
let four = Math.ceil(Math.random()*11);

console.log([first, sec, third, four]);


Queue.enqueue(first);
Queue.enqueue(sec);
Queue.enqueue(third);
Queue.enqueue(four);

console.log(Queue.peek());
Queue.dequeue();
console.log('removed');
console.log(Queue.peek());
