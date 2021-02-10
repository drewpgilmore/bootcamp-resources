import pymongo

conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)
db = client.store_inventory
collection = db.produce

produce_list = [
    {
        'type': 'mango',
        'cost': 1.50,
        'stock': 133
    },
    {
        'type': 'apple',
        'cost': .75,
        'stock': 200
    },
    {
        'type': 'blueberry',
        'cost': .25,
        'stock': 52
    },
    {
        'type': 'pineapple',
        'cost': 3.00,
        'stock': 100
    },
    {
        'type': 'grapefruit',
        'cost': 2.00,
        'stock': 80
    }
]

for item in produce_list:
    collection.insert_one(item)

