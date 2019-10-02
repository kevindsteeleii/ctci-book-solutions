class QNode():
    def __init__(self, data):
        self.data = data
        self.next = None

class Queue ():
    def __init_(self):
        self.first = None
        self.last = None

    def add(self, d):
        temp_node = QNode(d)
        if hasattr(self, 'first') is False and hasattr(self, 'last') is False:
            self.first = temp_node
        elif hasattr(self, 'last') is False:
            self.first.next = temp_node
            self.last = temp_node
        else:
            self.last.next = temp_node
            self.last = temp_node

    def remove(self):
        if hasattr(self, 'first') is False:
            return
        else:
            temp = self.first
            self.first = self.first.next
            temp.next = None

    def is_empty(self):
        return self.first is None

    def __str__(self):
        s = ''
        if hasattr(self, 'first') is False:
            s = 'Empty Queue...'
        else:
            temp = self.first
            
            while temp is not None:
                if temp.next is None:
                    s += '({})'.format(temp.data)
                else:
                    s += '({}) <- '.format(temp.data)
                temp = temp.next
        return s

            

# Testing goes here...
def main():
    q = Queue()
    print(str(q))
    q.add(4)
    print(str(q))
    q.add(2)
    print(str(q))
    q.remove()
    print(str(q))

if __name__ == '__main__':
    main()
            


