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

  peek(){
    return this.heap[0];
  }

  pop() {
    let length = this.heap.length;
    let top;
    if (length < 1) {
      throw new RangeError('Error: No entries in heap, insert data.');
    } else if (length === 1) {
      top = this.heap.pop();
      return top;
    } else {
      let last = this.heap[length - 1];

    }
  }


  getLeftChild(idx){
    return 2 * idx + 1;
  }

  getRightChild(idx){
    return 2 * idx + 2;
  }

  heapify() {
    let length = this.heap.length;
    if(this.isEmpty() || length === 1) {
      return
    } else {
    }
  }

  insert(data){
    this.heap.push(data)
    this.heapify(); // this is like that stupid 1, 2 ???, 3 profit thingie
  }

}