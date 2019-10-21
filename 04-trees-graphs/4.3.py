''' 
Question 4.3 
List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the Nodes
at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).
'''
from random import randrange

class Node:
    '''  
    Node class used to implement a singly-linked list
    '''
    def __init__(self, value=None, adj=None):
        self.value = value
        self.next = adj

    def add(self, value):
        curr = self
        while curr.next is not None:
            curr = curr.next
        curr.next = Node(value)


    def __str__(self):
        curr = self
        s = ''
        while curr is not None:
            if  curr:
                s += '{} -> '.format(curr.value)
            curr = curr.next
        return s + 'x'


class BST_Node:
    def __init__(self, val=None):
        self.value = val
        self.left = None
        self.right = None

    def __str__(self):
        return str(self.value)

class BST:
    def __init__(self, head=None):
        self.head = head

    def add(self, x):
        if self.head is None:
            self.head = BST_Node(x)
        else:
            curr = self.head

            while curr is not None:
                if curr.value < x:
                    curr = curr.right
                    if curr is None:
                        curr = BST_Node(x)
                        break
                else:
                    curr = curr.left
                    if curr is None:
                        curr = BST_Node(x)
                        break

"""  
    Trying an iterative ver. of solution...
"""

def get_level_list(curr, level=0, lists=[]):
    print('{} is curr'.format(curr))
    if curr:
        if len(lists) == level:
            lists.append(Node(curr.value))
            print(lists)
        else:
            lists[level].add(curr.value)
        get_level_list(curr.left, level + 1, lists)
        get_level_list(curr.right, level + 1, lists)
    else:
        return lists





def main():
    entries = [randrange(1,10) for i in range(10)]
    print(entries)
    # Tree = BST()
    head = Node(5)
    for x in entries:
    #     # Tree.add(x)
        head.add(x)
    
    print(head)

    # print(Tree.head)
    # preorder = get_level_list(Tree.head)
    # print(preorder)

if __name__ == '__main__':
    main()