const { Schema } = require('mongoose')

const Employee = new Schema(
  {
    company_id: { type: Schema.Types.ObjectId, ref: 'company_id' },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    job_title: {type: String, required: true},
    salary_in_usd: {type: Number, required: false},
    address: {type: String, required: true},
  },
  { timestamps: true }
)

module.exports = Employee