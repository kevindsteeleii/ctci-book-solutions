""" Implement algorithm that returns true when a string input is comprised mainly of unique characters and false when not. For extra challenge: do it w/o additional DS' """
# 1.1
def is_unique(s):
    count = dict()
    if len(s) <= 1:
        return True

    for i in range(len(s)):
        if s[i] not in count:
            count[s[i]] = 1
        elif count[s[i]] >= 1:
            return False
    return True
    

# challenge ver. w/o add'l DS
def is_unique_challenge(s):
    """ KEY: the key is to evaluate for any char in str that has a match, there is a variety ways to verify this
    1. sort string and then see if the idx - 1 matches at any time, if so return false otherwise true
    """
    for i in range(len(s)):
        for j in range(1, len(s) - 1):
            if s[i] == s[j] and j != i:
                return False
    return True
# 1.2
def check_permutation(p, q):
    """
    checks if one string is a permutation of another string
    :param p: str
    :param q: str
    :r-type: bool
    """
    if len(p) != len(q):
        return False
    count = {}
    for i in range(len(p)):
        count[p[i]] = count[p[i]] + 1 if p[i] in count else 1
    left = len(q)
    for j in range(len(q)):
        left = left - 1 if q[j] in count and count[q[j]] > 0 else left + 1
        count[q[j]] = count[q[j]] - 1 if q[j] in count and count[q[j]] > 0 else 1
    return True if left == 0 else False

""" Testing will happen here... """
def main():
    print(check_permutation('aab', 'aba')) # True
    print(check_permutation('aab', 'abb')) # False
    pass

if __name__ == '__main__':
    main()