'''  
Question 4.1
Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
'''
    
class Graph:
    def __init__(self):
        '''  
        The implementation of an undirected Graph ADT with a few key features kept in mind.
        '''
        self.graph = {}

    def add_edge(self, v, e):
        '''
        Adds and vertex/edge, if vertex as  key is found in dict, then append to the list of edge ends i.e. a -> e would be add_edge(a, e) and the subsequent dict would show something like the following:
        self.graph[a] => [e, ...]  
        '''
        if v in self.graph:
            self.graph[v].append(e)
        else:
            self.graph[v] = [e]

    def __str__(self):
        s = ''
        for k in self.graph:
            s += '{} -> {}\n'.format(k, self.graph[str(k)])
        return s

    def has_path(self, start, dest):
        start = self.graph[start]
        for x in start:
            temp = self.graph[x] if x in self.graph else []
            start.extend(temp) 
        if dest in start:
            return True
        return False

def main():
    _Graph = Graph()
    _Graph.add_edge('a', 'd')
    _Graph.add_edge('b', 'a')
    _Graph.add_edge('c', 'b')
    _Graph.add_edge('c', 'e')
    _Graph.add_edge('e', 'd')
    _Graph.add_edge('d', 'f')
    print(str(_Graph))
    print(_Graph.has_path('c', 'd'))
    print(_Graph.has_path('e', 'a'))
    print(_Graph.has_path('c', 'f'))

if __name__ == '__main__':
    main()