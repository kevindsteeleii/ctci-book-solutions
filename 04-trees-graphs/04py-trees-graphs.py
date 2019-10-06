from random import randint

class BT_Node:
    def __init__(self, data=None):
        """  
        Special Node for use with a binary tree
        You can't/shouldn't have direct access to class variables anyways...
        """
        self.__data = data
        self.__left = None
        self.__right = None

    def get_val(self):
        return self.__data

    def get_left(self):
        return self.__left

    def get_right(self):
        return self.__right

    def set_val(self, val):
        self.__data = val

    def is_vacant(self):
        return self.__data is None

    def add(self, d):
        """  
            Adds and sorts according to the sorting-hat rules of BSTs (binary search trees)
        """
        if self.__data > d:
            left = BT_Node(d)
            self.__left = left
        else:
            right = BT_Node(d)
            self.__right = right


def in_order_traversal(node:BT_Node):
    if node==None:
        return
    else:
        in_order_traversal(node.get_left())
        print(str(node.get_val())) # NOTE this is would usually be where "work" would be done...
        in_order_traversal(node.get_right())

def pre_traversal(node:BT_Node):
    if node.is_vacant() == True:
        return
    else:
        node.get_val()
        pre_traversal(node.get_left())
        pre_traversal(node.get_right())

def post_traversal(node:BT_Node):
    if node.is_vacant() == True:
        return
    else:
        post_traversal(node.get_left())
        post_traversal(node.get_right())
        node.get_val()

class BST:
    def __init__(self):
        """
        Class that mimics what goes on in a Binary Search Tree down to how things/Nodes/data is added  
        """
        self.root = None
        self.length = 0
    
    def add(self,value):
        if self.root==None:
            self.root=BT_Node(value)
            self.length += 1
        else:
            curr = self.root
            if self.root.get_val() < value:
                curr = curr.get_right()
                self._add(value, curr)
                self.length += 1
            elif self.root.get_val() > value:
                curr = curr.get_left()
                self._add(value, curr)
                self.length += 1
            else:
                print('Value already added.')

    def _add(self, value, curr_node):
        if curr_node==None:
            curr_node = BT_Node(value)
        else:
            if curr_node.get_val() > value:
                curr_node = curr_node.get_left()
                self._add(value, curr_node)
            elif curr_node.get_val() < value:
                curr_node = curr_node.get_right()
                self._add(value, curr_node)
            else:
                print('The value, {} is already in the tree'.format(value))

    def get_root(self):
        return self.root if self.root!=None else None
            
def main():
    bst = BST()
    for i in range(100):
        x = randint(1,1000)
        # print(x)
        bst.add(x)
    in_order_traversal(bst.get_root())
    print(str(bst.length))

if __name__ == '__main__':
    main()