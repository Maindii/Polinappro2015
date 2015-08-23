import os
f = open('koodit.txt', 'r')
for line in f:
    open(line.rstrip()+".html", 'w')
