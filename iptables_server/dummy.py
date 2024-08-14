#!/usr/bin/env python
from subprocess import Popen, PIPE
from getpass import getpass

import json 

command = "sudo -S iptables -L".split()
# password = getpass("Please enter your password: ")
password = 'r'
proc = Popen(command, stdin=PIPE, stderr=PIPE,
            stdout= PIPE,
            encoding="ascii")

rules, err = proc.communicate(password)


response = {}

rules = rules.split("\n")
# print(rules)

lineNo = 0

while lineNo < len(rules):
    key = rules[lineNo]
    values = []
    lineNo += 1
    while lineNo < len(rules) and "Chain" not in rules[lineNo]:
        values.append(rules[lineNo])
        lineNo += 1
    response[key]  = values 

print(json.dumps(response))
