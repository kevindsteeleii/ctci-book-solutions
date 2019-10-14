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

  getParent(idx) {
    let quot = Math.floor(idx/2); 
    let parentIdx = idx % 2 === 1 ? quot: quot - 1;
    return parentIdx;
  }

  heapDown() {
    let idx = 0;
    let rIdx = this.getRightChild(idx);
    let lIdx = this.getLeftChild(idx);

    while(this.heap[lIdx] !== undefined) {
      if (this.heap[lIdx] < this.heap[idx]) {
        let temp = this.heap[idx];
        this.heap[idx] = this.heap[lIdx];
        this.heap[lIdx] = temp;
        idx = lIdx;
        lIdx = this.getLeftChild(idx);
      } else if ( this.heap[rIdx] !== undefined && this.heap[rIdx] < this.heap[idx]) {
        let temp = this.heap[idx];
        this.heap[idx] = this.heap[rIdx];
        this.heap[rIdx] = temp;
        idx = rIdx;
        rIdx = this.getRightChild(idx);
      } else {
        return
      }
    }
  }

  remove() {
    /* Implementation of the min Heap's specific type of pop or "remove" method*/
    let length = this.heap.length;
    let top;
    if (length < 1) {
      throw new RangeError('Error: No entries in heap, insert data.');
    } else if (length === 1) {
      top = this.heap[0];
      this.heap[0] = undefined;
    } else {
      top = this.heap[0];
      let temp = this.heap.pop();
      this.heap[0] = temp;
      this.heapDown();
    }
    return top;
  }

  getLeftChild(idx){
    return 2 * idx + 1;
  }

  getRightChild(idx){
    return 2 * idx + 2;
  }

  exists(idx) {
    return this.heap[idx] !== undefined;
  }


  heapify() {
    if(this.heap.length === 1) {
      return
    } else {
      let idx = this.heap.length - 1;
      let pIdx = this.getParent(idx);
      while (this.heap[idx] < this.heap[pIdx]) {
        let temp = this.heap[idx];
        this.heap[idx] = this.heap[pIdx];
        this.heap[pIdx] = temp;
        idx = pIdx;
        pIdx = this.getParent(idx);
      }
    }
  }

  insert(data){
    this.heap.push(data)
    this.heapify(); // this is like that stupid 1, 2 ???, 3 profit thingie
  }

}

// const Heap = new MinHeap();
// console.log(Heap.heap);

// Heap.insert(11);
// Heap.insert(9);
// Heap.insert(8);
// Heap.insert(4);
// Heap.insert(7);
// console.log(Heap.heap);
// console.log(Heap.remove());
// console.log(Heap.heap);
