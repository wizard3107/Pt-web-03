## Create db


## insert document in colllection Single:
db.users.insert({"firstName":"Abhishek", "LastName":"Gangwar","Age":22,"email":"abhi@gmail.com","gender":"Male","ip_address":1.1.1.1})
db.users.insert({"firstName":"Ashish", "LastName":"Singh","Age":22,"email":"ashu@gmail.com","gender":"Male","ip_address":2.2.2.2})

## insert documents in collection multiple:

db.users.insertMany([{"firstName":"Romeo", "LastName":"ravi","Age":26,"email":"ravi@gmail.com","gender":"Male","ip_address":"3.3.3.3"},{"firstName":"Pankaj", "LastName":"Patel","Age":25,"email":"panku@gmail.com","gender":"Male","ip_address":"4.4.4.4"},{"firstName":"engine", "LastName":"sharma","Age":22,"email":"enjn@gmail.com","gender":"Female","ip_address":"1.1.1.2"},{"firstName":"Me", "LastName":"rav","Age":26,"email":"rav@gmail.com","gender":"Male","ip_address":"3.3.3.4"},{"firstName":"mini", "LastName":"ashi","Age":23,"email":"mini@gmail.com","gender":"Female","ip_address":"3.3.3.5"},{"firstName":"engine", "LastName":"sharma","Age":22,"email":"enjn@gmail.com","gender":"Female","ip_address":"1.1.1.2"},{"firstName":"Me", "LastName":"rav","Age":26,"email":"rav@gmail.com","gender":"Male","ip_address":"3.3.3.4"},{"firstName":"mini", "LastName":"ashi","Age":23,"email":"mini@gmail.com","gender":"Female","ip_address":"3.3.3.5"}])
