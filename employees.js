const db = require('...db')
const{Employee} = require('.../models')

db.on('error', console.error.bind(console,'MongoDB connection error:'))

const main = async()=>{
    const employees = [
        {
            _id: ObjectId("5e417175c82e0bd7af0f2f04"),
            company_id: dunderMifflin[0]._id, 
            first_name: "Dwight",
            last_name: "Shrute",
            email: "DShrute@dm.com",
            job_title: "salesman",
            salary_in_usd: 65000,
            address: "4 Beet Rd., Scranton PA 13425"
        },
        {
            _id: ObjectId("5e417175c82e0bd7af0f2f05"),
            company_id: dunderMifflin[0]._id, 
            first_name: "Pam",
            last_name: "Beesly",
            email: "PBeesly@dm.com",
            job_title: "receptionist",
            salary_in_usd: 55000,
            address: "6 Maple Ave., Scranton, PA 13426"
        },
        {
            _id: ObjectId("5e417175c82e0bd7af0f2f06"),
            company_id: dunderMifflin[0]._id, 
            first_name: "Michael",
            last_name: "Scott",
            email: "MScott@dm.com",
            job_title: "Branch Manager",
            salary_in_usd: 95000,
            address: "12 Oakwood Dr., Scranton, PA 13427"
        },
        {
        _id: ObjectId("5e417175c82e0bd7af0f2f07"),
        company_id: centralPark[0]._id, 
        first_name: "Joey",
        last_name: "Tribiani",
        email: "JTribiani@cp.com",
        job_title: "barista",
        salary_in_usd: 30000,
        address: "78 West 23rd St., Manhattan, NY 10010"
    },
    {
        _id: ObjectId("5e417175c82e0bd7af0f2f08"),
        company_id: centralPark[0]._id, 
        first_name: "Gunther",
        last_name: "Hunts",
        email: "GHunts@cp.com",
        job_title: "Manager",
        salary_in_usd: 52000,
        address: "Park Ave., Manhattan, NY 10016"
    },
    {
        _id: ObjectId("5e417175c82e0bd7af0f2f09"),
        company_id: centralPark[0]._id, 
        first_name: "Rachel",
        last_name: "Green",
        email: "RGreen@cp.com",
        job_title: "barista",
        salary_in_usd: 30000,
        address: "55 Cedar St., Manhattan, NY 10007"
    },
    {
        _id: ObjectId("5e417175c82e0bd7af0f2f10"),
        company_id: dragonflyInn[0]._id, 
        first_name: "Sookie",
        last_name: "St. James",
        email: "SookieSJ@dragonfly.com",
        job_title: "Head Chef",
        salary_in_usd: 60000,
        address: "1 Dragonfly Rd., Stars Hollow, CT 06492"
    },
    {
        _id: ObjectId("5e417175c82e0bd7af0f2f11"),
        company_id: dragonflyInn[0]._id, 
        first_name: "Michel",
        last_name: "Gerard",
        email: "MichelG@dragonfly.com",
        job_title: "Concierge",
        salary_in_usd: 50000,
        address: "2 Stars Ln., Stars Hollow, CT 06492"
    },
    {
        _id: ObjectId("5e417175c82e0bd7af0f2f12"),
        company_id: dragonflyInn[0]._id, 
        first_name: "Lorelai",
        last_name: "Gilmore",
        email: "LorelaiG@dragonfly.com",
        job_title: "Manager",
        salary_in_usd: 70000,
        address: "3 Hollow St., Stars Hollow, CT 06492"
    }
    
    ]
await Employee.insertMany(employees)
console.log('Created companies!')
}

const run = async()=>{
    await main()
    db.close()
}

run()