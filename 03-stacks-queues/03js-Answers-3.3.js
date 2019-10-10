/*
Question 3.3 Stack of Plates: 
Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. 

SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is, pop () should return the same values as it would if there were just a single stack).
*/

class SetOfStacks {
  constructor(capacity=5) {
    // capacity is set to 5 arbitrarily for testing purposes
    this._stacks = [[]];
    this._curr = 0; // current index w/n 2D array of latest stack 
    this._cap = capacity;
  }

  get length(){
    return this._curr + 1;
  }

  _isValid(el) {
    if (typeof(el) !== 'number' || !Number.isInteger(el) || Number.isNaN(el) || el < 0) {
      return false;
    }
    return true;
  }

  _overCapacity() {
    return this._cap === this._stacks[this._curr].length;
  }

  push(el) {
    if (this._isValid(el)) {
      if(this._overCapacity()) {
        let newStack = [];
        this._stacks.push(newStack);
        this._curr = this._stacks.length - 1;
      }
      this._stacks[this._curr].push(el);
    }
  }

  pop() {
    let popped = this._stacks[this._curr].pop();
    if (this._stacks[this._curr].length === 0 && this._curr !== 0) {
      this._stacks[this._curr] = undefined;
      this._curr -= 1;
    }
    return popped;
  }
  /* FOLLOW UP Implement a function popAt ( int index) which performs a pop operation on a specific sub-stack. */
  popAt(stack) {
    
  }
  
}

/* TESTING */
const Stacks = new SetOfStacks();
for(let i = 0; i < 6; i++) {
  Stacks.push(i);
}

console.log(Stacks);
console.log(Stacks.pop());
console.log(Stacks.pop());
console.log(Stacks.pop());
console.log(Stacks.pop());
console.log(Stacks.pop());
console.log(Stacks.pop());


console.log(Stacks);

