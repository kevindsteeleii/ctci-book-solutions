'''  
List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the Nodes
at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).
'''
from random import randrange
from collections import deque

class Node:
    def __init__(self, val):
        self.__value = val
        self.__next = None
    @property
    def next(self):
        return self.__next

    @next.setter
    def next(self, x):
        curr = self.next
        if curr is None:
            curr = Node(x)
        else:
            curr.next = curr
            next(x)

class BST_Node:
    def __init__(self, val):
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
            self.head = BST(x)
        else:
            curr = self.head
            while True:
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
    if curr is None:
        return lists
    else:
        if len(lists) == level:
            lists.append(Node(curr.value))
            print(lists)
        else:
            lists[level].next(Node(curr.value))
        get_level_list(curr.left, level + 1, lists)
        get_level_list(curr.right, level + 1, lists)





def main():
    entries = [randrange(1,10) for i in range(10)]
    print(entries)
    Tree = BST()
    for x in entries:
        Tree.add(x)

    # print(Tree.head)
    preorder = get_level_list(Tree.head)
    # print(preorder)

if __name__ == '__main__':
    main()