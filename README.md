# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

## SEBR 0116

## Getting started

1. Fork
1. Clone

# Exercise

Using the mongo-mongoose-queries lesson, implement the following in JavaScript:

1. Create an `employeesDatabase`

Here is an example of the design for your data model:
```js
{
    _id: ObjectId("5e417175c82e0bd7af0f2f04"),
    first_name: "Bruno",
    last_name: "Galvao",
    email: "bruno.galvao@ga.co",
    job_title: "Software Engineering Instructor",
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
    - find all employees
    - create one employee
    - create three employees
    - update one employee
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
