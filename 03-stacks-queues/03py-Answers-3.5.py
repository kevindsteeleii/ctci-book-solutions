'''  
Question 3.5
Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.
'''
from random import randrange

class Stack:
    '''
    Implementation of not-so-standard Stack class using another stop-gap Stack class  
    '''
    def __init__(self):
        self._main = []
        self._spare = []

    def push(self, x):
        '''
        Function that takes a new entry into a list. If the length is more than 1, the list must "reshuffle" its contents.
        :param: x
        '''
        if len(self._main) == 0:
            self._main.append(x)
        else:
            while x and len(self._main) >= 1:
                _curr = self._main.pop()
                if x <= _curr:
                    self._spare.append(x)
                    x = None
                self._spare.append(_curr)

            while len(self._spare) > 0:
                temp = self._spare.pop()
                self._main.append(temp)


    def pop(self):
        return self._main.pop()

    def peek(self):
        _last = len(self._main) - 1
        return self._main[_last]

    def isEmpty(self):
        return len(self._main) == 0


def main():
    nums = list()

    for i in range(10):
        nums.append(randrange(1,20))

    print(nums)

    _Stack = Stack()
    for x in nums:
        _Stack.push(x)

    # print(_Stack.peek())
    print(_Stack.peek())
    print(_Stack.pop())
    print(_Stack.peek())
    

if __name__ == '__main__':
    main()