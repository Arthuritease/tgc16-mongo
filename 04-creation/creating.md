# creating new Mongo database
Can just ;use' the database if already exist
If not, to create a databased name 'anaimal_shelter':

```
USE ANIMAL_SHELTER
```
database is not permanent until it has a collection

# create collection
To create, simply add documents to it.

# Adding document to a collection
```
db.animals.insertOne({
    'name':'Fluffy',
    'age':3,
    'breed':'Goldie',
    'type':'Dog'
})
```
# Adding many documents at once to a collection
```
db.animals.insertMany([
    {
    'name':'Daisy',
    'age':3,
    'breed':'Husky',
    'type':'Dog'
},
{
    'name':'Princeton',
    'age':5,
    'breed':'Samoyed',
    'type':'Dog'
}
])
```
# Update with new document
```
db.animals.updateOne({
    '_id':ObjectId("62172d341fb84b6dd22e3dc4")
},{
    $set:{
        'age':4.5,
        'breed':'Maltipoo'
    }
})
```
# Deleting a document
```
db.animals.deleteOne({
    '_id':ObjectId("62172ca81fb84b6dd22e3dc2")
});