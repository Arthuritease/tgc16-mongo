
# Question 1
```
db.students.insertMany([
    {
    'name':'Jane Doe',
    'age':13,
    'subject':["Defense Against Dark Arts", "Charms", "History of Magic"],
    'enrolment':'13th May 2016'
},
{
    'name':'James Versus ',
    'age':14,
    'subject':["Transfiguration", "Alchemy"],
    'enrolment':'15th June 2015'
}
])

db.students.insertOne({
    'name':'Jonathan Goh',
    'age':12,
    'subject':["Divination", "Study of Ancient Runes"],
    'enrolment':'16th April 2017'
})
```

# Question 2A
```
db.students.updateOne({
    '_id':ObjectId("621732151fb84b6dd22e3dc6")
},{
    $set:{
        'age':13
    }
})
```
# Question 2B
```
db.students.updateOne({
    '_id':ObjectId("621732151fb84b6dd22e3dc5")
},{
    $set:{
        'name':"Jane Doe Jr",
        'age':11
    }
})
```
# Qeustion 2C Jonathan Goh
```
db.students.updateOne({
    '_id':ObjectId("621732781fb84b6dd22e3dc7")
},{
    $set:{
        'enrolment':"2018 13th May"
    }
})
```
# Question 2D
```
db.students.updateMany({},
    { $inc:{ 
       'age':+1
    }
    })
    ```