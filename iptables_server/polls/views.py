from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


import json 

from subprocess import Popen, PIPE
from getpass import getpass



def parse_rules(rules):
    response = {}
    rules = rules.split("\n")
    lineNo = 0

    while lineNo < len(rules):
        key = rules[lineNo]
        values = []
        lineNo += 1
        while lineNo < len(rules) and "Chain" not in rules[lineNo]:
            if len(rules[lineNo]) > 0: 
                values.append(rules[lineNo])
            lineNo += 1

        response[key]  = values 
    
    return json.dumps(response)


def index(request):
    command = "sudo -S iptables -L".split()
    # todo: save the password in the config file.
    # password = getpass("Please enter your password: ")
    password = 'r'
    proc = Popen(command, stdin=PIPE, stderr=PIPE,
             stdout= PIPE,
             encoding="ascii")
    
    rules, err = proc.communicate(password)
    response = parse_rules(rules)
    # response = rules
    return HttpResponse(response, content_type="application/json")