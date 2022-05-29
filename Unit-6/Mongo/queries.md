## Comparision operators 

# equal to:
db.users.find({"age":{$eq:30}}).pretty()


# not equal to :
 db.users.find({"age":{$ne:30}}).pretty()


# greater than >:
db.users.find({"age":{$gt:30}}).pretty()


# greater then equal to : >=
db.users.find({"age":{$gte:30}}).pretty()


# less than <:
db.users.find({"age":{$lt:30}}).pretty()

# less than equal to :
db.users.find({"age":{$lte:30}}).pretty()


# in opreator : 

db.users.find({"age":{$in:[40,41,42,43,44,45]}}).pretty()

# not in opreator : 
db.users.find({"age":{$nin:[40,41,42,43,44,45]}}).pretty()


# to print a particular field
db.users.find({"age":{$in:[40,41,42,43,44,45]}}, {"email":1,"age":1}).pretty()


## Logical operators

# AND
db.users.find({$and: [{"age":{$lt:40}},{"gender":"Male"}]}).pretty()

# OR
db.users.find({$or: [{"age":{$lt:40}},{"gender":"Male"}]}).pretty()

# NOT
db.users.find({"age":{$not: {$gt:20}}}).pretty()

# NOR
db.users.find({$nor: [{"age":{$lt:40}},{"gender":"Male"}]}).pretty()


## SORT

# ascending
db.users.find({"age":{$gt:40}).sort(age:1).pretty() 

# Descending

db.users.find({"age":{$gt:40}).sort(age:-1).pretty()

## LIMIT

db.users.find({"age":{$gt:40}).sort(age:1).limit(5).pretty()
 it will print only 5 results 

## unset
db.movies.updateMany({"id":{$lt:11}}, {$unset:{"movie_genre":""}})
remove the field movie_genre form schema