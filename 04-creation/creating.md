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
```
# How to work with embedded documents
Keep track of checkups that each animal had:
```
db.animals.insertOne({
    'name':'Cookie',
    'age':3,
    'breed':'Lab Retriver',
    'type':'Dog',
    'checkups':[]
})

db.animals.insertOne({
    'name':'Frenzy',
    'age':1,
    'breed':'Wild cat',
    'type':'Cat',
    'checkups':[
        {
            'id':ObjectId(),
            'name':'Dr Chua',
            'diagnosis':'Heartworms',
            'treatment':'Steriods'
        }
    ]
});
```

## Add a new sub-document to an array
```
db.animals.updateOne({
    '_id':ObjectId('62173de1c77fb2cf36a41a38')
},{
    '$push':{
        'checkups':{
            'id':ObjectId(),
            'name':'Dr Tan',
            'diagnosis':'Diabetes',
            'treatment':'Medication'
        }
    }
})
```

We can use $push on documents that don't have the array to begin with

```
db.animals.updateOne({
    '_id':ObjectId("62172c5d5e4cc3d0ca8b8407")
},{
    $push:{
        'checkups':{
            'id':ObjectId(),
            'name':'Dr Chua',
            'diagnosis':'Stomache',
            'treatment':'Pills'
        }
    }
})
```
## Remove sub-document from array
Remove the checkup from Fluffy the golden retriever with the id of 

```
db.animals.updateOne({
    "_id":ObjectId("62172c5d5e4cc3d0ca8b8407"),
},{
    '$pull':{
        'checkups':{
            'id':ObjectId("62173fe1c77fb2cf36a41a3c")
        }
    }
})
```

## Update one of the checkups' name to Dr. Su 
```
db.animals.updateOne({
    '_id':ObjectId("62173df8c77fb2cf36a41a3a"),
    'checkups':{
        $elemMatch:{
            'id':ObjectId("62173df8c77fb2cf36a41a39")
        }
    }
},{
    '$set': {
        'checkups.$.name':'Dr Su'
    }
})
```
Alternate method:

```
db.animals.updateOne({
    '_id':ObjectId('62173df8c77fb2cf36a41a3a'),
    'checkups.id':ObjectId("62173df8c77fb2cf36a41a39")
}, {
    $set:{
        'checkups.$.name':'Dr Zhao'
    }
})
```