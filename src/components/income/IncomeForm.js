import React from 'react'

const IncomeForm = ({ profile, handleChange, handleSubmit }) => (

  <div className="IncomeForm">

    <form onSubmit={handleSubmit}>
      <div className="section">

        <input
          className="input is-rounded"
          type="number"
          placeholder="Annual Gross Salary"
          onChange={handleChange}
          value={profile.salary.annual_gross_salary}
        />
        <label htmlFor="input" className="userSalaryInput">Annual Gross Salary (£)</label>

      </div>
    </form>

  </div>

)

export default IncomeForm
