class Node():
    def __init__(self, d:int):
        """  
        Node for a singly linked list
        :param d: value that the Node holds
        :self.next: pointer to next Node, None by default
        """
        self.data = d
        self.next = None

    def add_node(self, n:int):
        self.next = Node(n)
    
    def __repr__(self):
        """  
        Dunder-method that returns the formatted values w/n the singly linked-list
        """
        temp = self
        s = ''
        while temp != None:
            s += '{} -> '.format(str(temp.data)) if temp.next is not None else str(temp.data)
            temp = temp.next
        return s


"""  
    Some node "library" stuff
"""

def delete_node(head: Node, d: int):
    """  
        As the name implies, this takes the "head" node and runs a two-pointer op to find and delete the target based on data value by tying together it's before and after, if the target remains undiscovered, it does nothing (just returns) and runs 
        :param head: type Node, the head of a singly linked-list
        :param d: the value of the node to be "deleted"
    """
    temp = head # assign thru reference 
    slow_pt, fast_pt = head, head.next # pointers
    cycles = 0 # do I need cycles?
    while temp != None:
        if temp.data != d:
            temp = temp.next
            fast_pt = fast_pt.next
            slow_pt = slow_pt.next if cycles > 0 else slow_pt
        else:
            slow_pt.next = fast_pt
        cycles += 1 if cycles < 1 else 1
    return head


def LinkChain(d_list):
    pass

            
            


        

    
def main():
    node = Node(2)
    print(node)
    node.add_node(4)
    print(node)


if __name__ == '__main__':
    main()