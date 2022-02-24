``` question A
db.companies.find({
    'founded_year': 2006
},{
    'name':1,
})

``` question B

db.companies.find({
    'founded_year':{
        '$gt':2000
        }
    }, {
        'name':1,
    }).pretty()

``` question C
db.companies.find({
    'founded_year':{
        '$gte':1900,
        '$lte':2010
    }
    },{
        'name':1
    }).pretty()

``` question 3A
db.companies.find({
    'ipo.valuation_amount':{
        '$gte':100000000
    }
},{
    'name':1,
    'ipo.valuation_amount':1,
    'ipo.valuation_currency_code':1
}).pretty()

``` question 3B
db.companies.find({
    'ipo.valuation_amount':{
        '$gte':100000000
    },'ipo.valuation_currency_code':'USD'
},{
    'name':1,
    'ipo.valuation_amount':1,
    'ipo.valuation_currency_code':1
}).pretty()