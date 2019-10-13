''' 
Question 3.6 
Animal Shelter: An animal shelter, which holds only dogs and cats, operates on a strictly"first in, first out" basis. People must adopt either the"oldest" (based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would like. Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat. You may use the built-in Linked list data structure.
'''
from random import randint

class PetQueue:
    def __init__(self):
        self.q = list() # misspelling and a gross over-simplification but whatevs...

    def show(self):
        return self.q

    def enqueue(self, pet):
        self.q.append(pet)

    def dequeue_any(self):
        return self.q.pop(0)

    def dequeue_dog(self):
        i = 0
        while True:
            if self.q[i] == 'dog':
                return self.q.pop(i)
            else:
                i += 1
            if i >= len(self.q):
                break

    def dequeue_cat(self):
        i = 0
        while True:
            if self.q[i] == 'cat':
                return self.q.pop(i)
            i += 1
            if i >= len(self.q):
                break

def main():
    Pets = PetQueue()
    choices = ['cat', 'dog']
    i = 0
    while i < 10:
        x = randint(0, 1)
        Pets.enqueue(choices[x])
        i += 1

    print(Pets.show())
    Pets.dequeue_cat()
    print(Pets.show())

if __name__ == '__main__':
    main()