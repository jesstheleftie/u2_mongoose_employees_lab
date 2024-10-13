const db = require('...db')
const{Company} = require('.../models')

db.on('error', console.error.bind(console,'MongoDB connection error:'))

const main = async()=>{
    const companies = [
        {
            _id: ObjectId("70ed7af8f25e417175c82f04"),
           company_name: "Dunder Mifflin",
           location: "Scranton, PA",
           product: "paper",
           type: "private",
           established: 2003
           },
           {
            _id: ObjectId("70ed7af8f25e417175c82f04"),
           company_name: "Central Perk",
           location: "Manhattan, NY",
           product: "Food and Beverage",
           type: "private",
           established: 1994
           },
           {
            _id: ObjectId("70ed7af8f25e417175c82f04"),
           company_name: "Dragonfly Inn",
           location: "Stars Holow, CT",
           product: "Hospitality",
           type: "private",
           established: 2004
           },
    ]
await Company.insertMany(companies)
console.log('Created companies!')
}

const run = async()=>{
    await main()
    db.close()
}

run()