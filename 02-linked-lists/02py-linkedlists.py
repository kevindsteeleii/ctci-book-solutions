class Node():
    def __init__(self, d:int):
        """  
        Node for a singly linked list
        :param d: value that the Node holds
        :self.next: pointer to next Node, None by default
        """
        self.data = d
        self.next = None

    def __str__(self):
        return '({})'.format(str(self.data))
    
      
class LinkedList():
    def __init__(self):
        self.head = None

    def serial_append(self, d_list):
        '''
        Takes a list of ints and adds them to the linked-list in order of sequence 0 -> n/2 -> n  
        :param d_list: list of data to be added as Nodes to linked list
        '''
        for i in range(len(d_list)):
            data = d_list[i]
            self.append_tail(data)
        
    def delete_mid(self, t_data):
        """  
        Method that takes a target Node's data value and removes its corresponding Node, if it exists and is not the head nor tail of the Node.
        :param t_data: target Node's data value
        """
        if self.head is None:
            return
        else:
            temp = self.head.next
            prev = self.head
            while temp is not None:
                if temp.data == t_data:
                    t = temp
                    temp = temp.next
                    prev.next = temp
                    t.next = None
                temp = temp.next
                prev = prev.next
            return


    def append_tail(self, d):
        node = Node(d)
        if self.head:
            temp = self.head
            while temp is not None:
                if temp.next is None:
                    temp.next = node
                    return
                temp = temp.next
        else:
            self.head = node
        

    def __str__(self):
        temp = self.head
        s = ''
        while temp:
            s += '({}) -> '.format(str(temp.data)) if temp.next is not None else '({}) -> x'.format(str(temp.data))
            temp = temp.next
        return s

    
def main():
    n = Node(5)
    print(n)
    linky1 = LinkedList()
    linky1.head = n
    print(linky1)
    linky1.append_tail(6)
    print(linky1)
    arr = [1, 2, 3, 4]
    linky1.serial_append(arr)
    print(linky1)
    linky1.delete_mid(2)
    print(linky1)


if __name__ == '__main__':
    main()