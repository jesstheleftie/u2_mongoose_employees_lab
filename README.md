# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

## SEBR 0116

![](https://nbcnews.shorthandstories.com/--the-office--turns-15/assets/Sy8UO5pKBS/office-package-today-2560-200106-2560x1440.jpeg)


## Getting started

1. Fork
1. Clone

# Exercise

Using the mongo-mongoose-queries lesson, implement the following in JavaScript:

1. Create an `employeesDatabase`. It will have 2 collecitions, Companies and Employees

Here is an example of the design for your Company  model:


```js
 _id: ObjectId("70ed7af8f25e417175c82f04"),
company_name: "Big Business",
headquarters: "New York, NY",
product: "Rubber Chickens",
type: "private",
established: 2024
```

and your Employee data model:
```js
{
    _id: ObjectId("5e417175c82e0bd7af0f2f04"),
    company_id: bigBusiness[0]._id 
    first_name: "John",
    last_name: "Coltrane",
    email: "ALove@Supre.me",
    salary_in_usd: 75000,
    address: {
        street: "10 E 21St St",
        city: "New York",
        state: "NY",
        zip: "10010"
    }
}

```
##
2. Implement the above model. This is a trickier model because it has an embedded document. You will have to research the [Mongoose Docs](https://mongoosejs.com/docs/subdocs.html) on how to implement a subdocument in your model

##

3. Create a seed file with 5 employees
##

4. Create a query file with the following queries:
    - Create 3 companies
    - create three employees for each company
    - update one company to go "Public". Buy stock before the IPO is released, then avoid insider trading charges by the SEC
    - update one employee's salary, give them a $10,000 raise
    - delete an employee
    - return a list of all employees' full names (first_name + last_name)
      - hint: you can use [projections](https://mongoosejs.com/docs/api.html#model_Model.find) to solve this

## Bonus

Use [chance](https://www.npmjs.com/package/chance) npm package to generate employees in your seed file instead.

```js
const chance = require('Chance')

const employees = [...Array(10)].map(employee => (
    {
        first_name: chance.first(),
        last_name: chance.last(),
        email: chance.email(),
        job_title: chance.profession(),
        address: {
            street: chance.streetName(),
            city: chance.city(),
            state: chance.state(),
            zip: chance.zipCode()
        }
    }
))
```
