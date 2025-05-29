import json

with open('response_get_lists.json', 'r') as json_file:
    data = json.load(json_file)
for i in range (len('lists')):
    print(data['lists'][i]['name'])
    print(data['lists'][i]['id'])

