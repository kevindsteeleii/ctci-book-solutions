/*  
  Binary MinHeap Implementation
            0
       /       \ 
      1        2
    /   \    /   \
   3     4  5     6

*/
class MinHeap {
  constructor() {
    /* NOTE A variation of min Heap where it's internal structure is that of an array  */
    this.heap = [];
  }

  isEmpty(){
    return this.heap.length===0;
  }

  peek(){
    return this.heap[0];
  }

  getLeftChild(idx){
    if (idx == 0) {
      return 1;
    } else {
      let level = Math.floor(Math.log2(idx + 1));
      // let offset = idx - 
      let childIdx = idx + 2**level + offset;
    }
  }

  heapify() {
    if(this.isEmpty()) {
      return
    } else {
      if (this.heap.length === 1) {
        return
      } else {
        // let idx = this.heap.length - 1;
        // let val = this.heap[idx];

        // while (val && idx > 0) {
        //   let level = Math.floor(Math.log2(idx+1));
        //   // REFACTOR any var with "p" prefix is parent_
        //   let pDiff = Math.floor(Math.log2(idx + 1)) - 2**level;
        //   if (level <= 1) {

        }

        }
      }
        
    // }
      // let idx = this.heap.length - 1;
      // let val = this.heap[idx];
      // let level = Math.floor(Math.log2(idx + 1));
      // let parentLevel = level - 1;
      // let diff = Math.floor(((idx + 1) - 2**level)/2);
      // let parentIdx = 2**(parentLevel- 1) + diff; 
      /* NOTE use the level before the parent level, 
      CAUTION it only works with heaps that have a height of 2 or more... */
    // }
    // END of class
  // }

  insert(data){
    this.heap.push(data)
    this.heapify(); // this is like that stupid 1, 2 ???, 3 profit thingie
  }

}