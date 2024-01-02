import sys
filename = "SUCCESS.txt"

def main():
    print("Creating file called {}".format(filename))
    with open(filename, 'w') as f:
        f.write("This file was successfully created by the python script")
        sys.stdout.flush()


main()
