import requests
import json

with open('./dataset/merchants.txt', 'r') as file:
    merchantList = file.read().split('\n')

    uri = 'https://backflipp.wishabi.com/flipp/items/search?locale=en-ca&postal_code=L6X2B4&q='

    for merchant in merchantList:
        resp = requests.get(uri + merchant).json()
        f = open('./dataset/' + merchant + '.json', 'w')
        f.write(json.dumps(resp))
        f.close()


