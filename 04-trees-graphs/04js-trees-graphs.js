/*  
  Binary MinHeap Implementation
                     0
                 /      \ 
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

  peek() {
    if (this.heap.length === 0) {
      throw new RangeError('Error: No entries in heap, insert data.');
    } else {
      return this.heap[0];
    }
  }

  remove() {
    /* Implementation of the min Heap's specific type of pop or "remove" method*/
    let length = this.heap.length;
    let top;
    if (length < 1) {
      throw new RangeError('Error: No entries in heap, insert data.');
    } else if (length === 1) {
      top = this.heap.pop();
      return top;
    } else {
      this.heap[0] = this.heap.pop();
      heapDown();
    }
  }

  getLeftChild(idx){
    return 2 * idx + 1;
  }

  getRightChild(idx){
    return 2 * idx + 2;
  }

  heapDown(idx=0) {
    let val = this.heap[idx];
    let rIdx = getRightChild(idx);
    let rVal = this.heap[rIdx]
    let lIdx = getLeftChild(idx);
    let lVal = this.heap[lIdx]
    
    let curr = this.heap[idx];
    // if (lVal && lVal < val )

  }

  heapify() {
    let length = this.heap.length;
    if(this.isEmpty() || length === 1) {
      return
    } else {
      let last = this.heap[length - 1];
      let idx = length - 1;
      // let parent = (length - 1)%2 === 0? : ;
    }
  }

  insert(data){
    this.heap.push(data)
    this.heapify(); // this is like that stupid 1, 2 ???, 3 profit thingie
  }

}

let heap = new MinHeap();
