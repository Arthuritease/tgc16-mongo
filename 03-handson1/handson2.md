Question 1A

db.restaurants.find({
    'cuisine': Hamburgers
},{
    'name':1,
})

Question 1B

db.restaurants.find({
    'cuisine': 'American',
    'borough': 'Bronx'
},{
    'name':1,
})

Question 1C

db.restaurants.find({
    'address.street': "Stillwell Avenue"
},{
    'name':1,
})

Question 2A
db.movies.find().count()

Question 2B
db.movies.find({
    'year':{
        '$lte':2000
    }

}).pretty()

Question 2C

db.movies.find({
    'countries':"USA"
},{
    'title':1,
    'countries':1
    
}).pretty().limit(10)

Question 2D

db.movies.find({
    'countries':{
        '$nin':["USA"]
    }
    },{
        'title':1,
        'countries':1
}).pretty().limit(10)

Question 2E
db.movies.find({
    'awards.wins':{
        '$gte':3
    }
},{
    'title':1,
    'awards':1
}).pretty()

Question 2F

db.movies.find({
    'awards.nominations':{
        '$gte':3
    }
},{
    'title':1,
    'awards':1
}).pretty()

Question 2G
db.movies.find({
    'cast':{
        '$in':["Tom Cruise"]
    }
},{
    'title':1,
    'cast':1
}).pretty()

Question 2H
db.movies.find({
    'directors':{
        '$in':["Charles Chaplin"]
    }
},{
    'title':1,
    'directors':1
}).pretty()

Questions 3A

db.data.find({
    'wind.speed.rate':{
        '$gte':5
    }
},{
    '_id':1,
    'wind.speed.rate':1
})

Question 3B

db.data.find({
    'wind.speed.rate':{
        '$gte':5s
    },
    'wind.speed.rate':{
        '$nin':["999.9"]
    }
},{
    '_id':1,
    'wind.speed.rate':1
})
