# Cracking the Coding Interview

## Chapter 03: Written Answers

**Question 3.1** Three in One: Describe how you could use a single array to implement three stacks.

**Answer:**
By using a combination of modular math -> X % Y you could easily implement three stacks w/n a single array. The approach of this implementation of this ADT would be to create a class constructor with an array and three pointers/index references to the "tops" of our respective stacks. Below is the code snippet:

```javascript
     class ThreeStack {
          constructor() {
               this.stacks = [];
               this. firstTop = 0;
               this. secTop = 1;
               this. thirdTop = 2;
          }
     }
```
**Class Method Implementations:**

*push(num:number, stackRef:number)*

Push would be a little more involved. The first thing to check is the the stack reference to figure out which stack the newly introduced element would be inserted into.
