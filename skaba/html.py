import os
f = open('koodit.txt', 'r')
for line in f:
    os.makedirs(line.rstrip())
    open(line.rstrip()+"/index.html", 'w')
