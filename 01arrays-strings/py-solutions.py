# Implement algorithm that returns true when a string input is comprised mainly of unique characters and false when not. For extra challenge: do it w/o additional DS'

def is_unique(str):
    count = dict()
    if len(str) <= 1:
        return True

    for i in range(len(str)):
        if str[i] not in count:
            count[str[i]] = 1
        elif count[str[i]] > 1:
            return False
    return True
    

# challenge ver. w/o add'l DS
def is_unique_challenge(str):
    pass

# def main():
#     pass

# if __name__ == '__main__':
#     main()