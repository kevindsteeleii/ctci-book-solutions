from random import randint

class BT_Node:
    def __init__(self, value=None):
        self.val = value
        self.left = None
        self.right = None
    
    def __str__(self):
        return str(self.val)


def add(root, n:BT_Node):
    if root is None:
        root = n
    else:
        data = n.val
        val = root.val
        if data > val:
            if root.right is None:
                root.right = n
            else:
                root = root.right
                add(root, n)
        elif data < val:
            if root.left is None:
                root.left = n
            else:
                root = root.left
                add(root, n)
        else:
            print('No dupes...')
            return
    return

def in_order(root):
    if root is None:
        return
    else:
        in_order(root.left)
        print(root.val)
        in_order(root.right)

def pre_order(root):
    if root is None:
        return
    else:
        print(root.val)
        in_order(root.left)
        in_order(root.right)

def post_order(root):
    if root is None:
        return
    else:
        in_order(root.left)
        in_order(root.right)
        print(root.val)

def main():
    head = BT_Node(25)
    i = 0
    while True:
        x = randint(1, 100)
        # print(x)
        temp = BT_Node(x)
        add(head, temp)
        i += 1
        if i >= 19:
            break
    
    # in_order(head)
    # pre_order(head)
    post_order(head)
    # print(str(head.left))


if __name__=='__main__':
    main()