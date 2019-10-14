'''  
List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes
at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).
'''
from random import randrange

class Node:
    def __init__(self, val):
        self.value = val
        self.left = None
        self.right = None

class BST:
    def __init__(self, head=None):
        self.head = head

    def add(self, x):
        if self.head is not None:
            curr = self.head
            while True:
                if curr.value < x:
                    curr = curr.right
                    if curr is None:
                        curr = Node(x)
                        break
                else:
                    curr = curr.left
                    if curr is None:
                        curr = Node(x)
                        break

        else:
            self.head = Node(x)

            

def main():
    entries = [randrange(1,10) for i in range(10)]
    print(entries)
    Tree = BST()
    for x in entries:
        Tree.add(x)

    print(str(Tree))

if __name__ == '__main__':
    main()