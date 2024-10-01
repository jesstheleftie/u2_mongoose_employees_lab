# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) The Office Employee Database

## SEBR 0429

![](https://nbcnews.shorthandstories.com/--the-office--turns-15/assets/Sy8UO5pKBS/office-package-today-2560-200106-2560x1440.jpeg)


## Getting started

1. Fork
1. Clone

# Exercise

Using the mongo-mongoose-queries lesson, implement the following in JavaScript:

1. Create an `employeesDatabase`. It will have 2 collecitions, Companies and Employees. Companies will be the parent, while Employees will be the related child

Here is an example of the design for your Company  model:


```js
{
 _id: ObjectId("70ed7af8f25e417175c82f04"),
company_name: "Dunder Mifflin",
location: "Scranton, PA",
product: "paper",
type: "private",
established: 2003
}
```

and your Employee data model:
```js
{
    _id: ObjectId("5e417175c82e0bd7af0f2f04"),
    company_id: dunderMifflin[0]._id, 
    first_name: "Dwight",
    last_name: "Shrute",
    email: "DShrute@dm.com",
    job_title: "salesman",
    salary_in_usd: 65000,
    address: "4 Beet Rd., Scranton PA 13425"
}

```
##
2. Implement the above models with a schema for each. You can add or change up any of the properties, but make sure both models have at least 2 different data types.

Try to put a nested object in the Employee model for address. This is a trickier model because it has an embedded document. You will have to research the [Mongoose Docs](https://mongoosejs.com/docs/subdocs.html) on how to implement a subdocument in your model

##

3. Create a seed file with 3 companies, and  3 employees for each
   
##

4. Create a query file with the following queries:
  
    -  return a list of all employees' full names (first_name + last_name) from one company
      - hint: you can use [projections](https://mongoosejs.com/docs/api.html#model_Model.find) to solve this
    - update one company to go "Public". Buy stock before the IPO is released, then avoid insider trading charges by the SEC
    - update one employee's salary, give them a $10,000 raise
    - Why pay big city rent when we can work from home somewhere in the suburbs? Update another employee's City to be somewhere a few miles away
    - delete an employee
    - they're closing the Stamford branch! Delete all employees from one company
    

## Bonus

*Do not attempt these until you have your data already seeded, and at least 2 of your Query.js functions working!*
### Pt 1 - Embedded Data 

- Convert your address property from a single string to an embedded Subdocument. Check the Mongoose doc's for what this entails!
- Your data should look something like this

  ```js

  {
  ...
  address {
   street: `123 fake st`,
   city: `Fakesville`,
   state: `FK`,
   zipCode: 12345
  }
 }  
  


### Pt 2 - Chance
Use [chance](https://www.npmjs.com/package/chance) npm package to generate employees in your seed file instead. Run 'npm install chance' in your root folder (the one that has the package.json file) and use chance to generate fake data with ease! Once you have these in (and your Company model Find'ed as well), run your seed/employees.js file

```js
const chance = require('Chance')
///

const chance = new Chance()

///


const company = //find your parent model!

const employees = [...Array(10)].map(employee => (
    {
        first_name: chance.first(),
        last_name: chance.last(),
        email: chance.email(),
        job_title: chance.profession(),
        salary_in_usd: chance.integer({ min: 30000, max: 100000 }),
        company = company.id //how should this look? Go back to your lesson to find out!
        address: {
            street: chance.word(),
            city: chance.city(),
            state: chance.state(),
            zip: chance.integer({ min: 10001, max: 99999 })
        }
    }
))
```
