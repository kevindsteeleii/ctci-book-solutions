# Cracking the Coding Interview

## Chapter 03: Written Answers for questions 3.1 & 3.2

### Question 3.1 Three in One: Describe how you could use a single array to implement three stacks.

#### Answer:
By using a little bit of addition/subtraction and some variables you could easily implement three stacks w/n a single array. The approach of this implementation of this ADT would be to create a class constructor with an array and three pointers/index references to the "tops" of our respective stacks. Below is the code snippet:

```javascript
     class ThreeStack {
          constructor() {
               this.stacks = [];
               this._1stTop = 0;
               this._2ndTop = 1;
               this._3rdTop = 2;
          }
          // ... The rest of the things
     }
```

#### Class Method Implementations

##### push(num, stack)

Push would be a little more involved than in a stack. You would need to indicate which stack you were inserting into, indicated by the parameter stack. The element being inserted would be num. After establishing which stack is being inserted into, you would insert at the index which is the sum of the class variable being used to keep track of the stack's height and three. Below is the code snippet of what this function may look like, mind you this is inside of the class written about above.

```javascript
     push(num, stack) {
          if (typeof(stack) !== 'number' || Number.isInteger(stack)) {
               throw new Error('Parameter "stack" must be an integer.')
          }
          if (stack < 1 || stack >= 4) {
               throw new Error('Pick a number between 1 and 3 for stack')
          }
          // figures out the last element
          let lastElement = stack === 1 ? this._1stTop : undefined;
          lastElement = stack === 2 ? this._2ndTop : lastElement;
          lastElement = stack === 3 ? this._3rdTop : lastElement;

          // inserting the element num at the index of the last element in indicated stack + 3
          this.stacks[lastElement + 3] = num;

          // incrementing accordingly
          this._1stTop = stack === 1 ? this._1stTop + 3 : this._1stTop;
          this._2ndTop = stack === 2 ? this._2ndTop + 3 : this._2ndTop;
          this._3rdTop = stack === 3 ? this._3rdTop + 3 : this._3rdTop;
     }
```

##### pop(stack)

The parameter stack indicates which stack is being "popped" from. We then go on to assign a local scope variable to the index of the top element of the stack indicated by the stack parameter. We then assign the index of the last element of that stack to "undefined" and then we decrement the class variable that indicates that stack's top element by 3, unless the last element is also the first of its stack: 1, 2, or 3. Below is the code snippet with that consideration taken into account.

```javascript
     pop(stack) {
          if (typeof(stack) !== 'number' || Number.isInteger(stack)) {
               throw new Error('Parameter "stack" must be an integer.')
          }
          if (stack < 1 || stack >= 4) {
               throw new Error('Pick a number between 1 and 3 for stack')
          }
          // figures out the last element
          let lastElement = stack === 1 ? this._1stTop : undefined;
          lastElement = stack === 2 ? this._2ndTop : lastElement;
          lastElement = stack === 3 ? this._3rdTop : lastElement;

          // create temp variable that holds the value of the last element of indicated stack
          let temp = this.stacks[lastElement];
          this.stacks[lastElement] = undefined;

          // decrementing accordingly
          this._1stTop = stack === 1 ? this._1stTop - 3 : this._1stTop;
          this._2ndTop = stack === 2 ? this._2ndTop - 3 : this._2ndTop;
          this._3rdTop = stack === 3 ? this._3rdTop - 3 : this._3rdTop;

          return temp;
     }
```

##### peek(stack)

The parameter stack indicates which stack is being peeked upon. We then assign a local variable to the index of the top of the indicated stack and return the value at that index.

```javascript
     pop(stack) {
          if (typeof(stack) !== 'number' || Number.isInteger(stack)) {
               throw new Error('Parameter "stack" must be an integer.')
          }
          if (stack < 1 || stack >= 4) {
               throw new Error('Pick a number between 1 and 3 for stack')
          }
          // figures out the last element
          let lastElement = stack === 1 ? this._1stTop : undefined;
          lastElement = stack === 2 ? this._2ndTop : lastElement;
          lastElement = stack === 3 ? this._3rdTop : lastElement;

          return this.stacks[lastElement];
     }
```

### Question 3.2 Stack Min: How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop and min should all operate in 0(1) time

#### Answer: 
If we can assume that this ADT does not admit negative nor non-number/NaNs, we create an additional instance variable that is initialized as *undefined*. In the **insert** method, we insert the value into the stack's inner array we then check if the length of the stack's inner array, **_stack** is 1, if so we make the instance variable used to account for min that value. Afterwards, upon future inserts, the minimum value instance variable is checked against the new entry and is reassigned to that new value if it is indeed less than the current minimum. The **pop** method will have to create a temp variable assigned to the inner array's returned value from its pop method. Then a for-of or for loop will be used to determine the new min, if the popped value equals the recorded minimum.

```javascript
     class Stack {
          constructor() {
               this._stack = [];
               this._min;
          }

          get min() {
               if (this._stack.length === 0) {
                    throw new RangeError('No entries inside stack, add elements to establish a minimum value');
               }
               return this._min;
          }

          push(val) {
               this._stack.push(val);
               if (this._stack.length === 1) {
                    this._min = val;
               }
               this._min = val < this._min? val : this._min;
          }

          pop() {
               let popped = this._stack.pop();
               if (popped === this._min) {
                    for (const val of this._stack) {
                         this._min = val < this._min ? val: this._min;
                    }
               }
               return popped;
          }
     }
```
