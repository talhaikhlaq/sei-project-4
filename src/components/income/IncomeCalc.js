import React from 'react'

const IncomeCalc = ({ handleChange, handleSubmit, data }) => (

  <div className="section">
    <div className="container">
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div id="incomecalc-tile" className="tile is-child box">
            <h2 id="enterSalaryLabel">Please enter your annual salary</h2>
            <form onSubmit={handleSubmit}>
              <input
                id="salaryInput"
                name="annual_gross_salary"
                placeholder="Annual Gross Salary"
                onChange={handleChange}
                value={data.salary.annual_gross_salary || ''}
              />
            </form>
            <button id="submitButton">Submit</button>
            <div className="container" id="resultsSection">
              <div className="row">
                <div className="col-md-6">
                </div>
                <div className="col-md-6">
                  <div className="mx-auto" id="tableSection">
                    <h2>You take home</h2>
                    <div id="takeHomeTotal"></div>
                    <div id="resultsTable"></div>
                    <div id="resultsTableMonthly"></div>
                  </div>
                </div>
              </div>
              <div className="row" id="editResults">
                <div id="editDiv">
                  <p id="editButton">Edit Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




)
export default IncomeCalc

// let userSalary = '#salaryInput'
// userSalary = pasrseInt(userSalary)
// const totalIncome = userSalary

// Tax Rate If Statement
// let totalTax = 0
// const maxBasicRate = 6900
// const maxHigherRate = 46200
//
// if (totalIncome > 150000) {
//   let additionalRate = (totalIncome - 150000) * 0.45
//   console.log(additionalRate)
//   totalTax = additonalRate + maxBasicRate + maxHigherRate
// }
//
// else if (totalIncome >= 46351 && totalIncome <= 150000) {
//   let higherRate = (totalIncome - 46350) * 0.4
//   totalTax = higherRate + maxBasicRate
// }
//
// else if (totalIncome >= 11851 && totalIncome <= 46350) {
//   totalTax = (totalIncome - 11850) * 0.2
// }

// National Insurance If Statement
// let totalNI = 0
// const weeklyIncome = totalIncome / 52
//
// if (weeklyIncome > 892) {
//   let lowerNI = (weeklyIncome - 892) * 0.02
//   totalNI = 87.60 + lowerNI
//   console.log(weeklyIncome)
//   console.log(totalNI)
// }
//
// else if (weeklyIncome <= 892 && weeklyIncome > 162) {
//   totalNI = (weeklyIncome - 162) * 0.12
// }
//
// totalNI = totalNI * 52

// rounding to 2 decimal places
// totalNI = totalNI.toFixed(2)
// totalTax = totalTax.toFind(2)
//
// takeHome = totalIncome - totalTax - totalNI
// takeHome = takeHome.toFixed(2)

// const takeHomeTotal = '<h1>£'+ takeHome + ' <span>/year</span></h1>'

// take home yearly break down
// const takeHomeYearlyTable =
// <table className="resultsTable">
//   <tr>
//     <th>Take Home</th>
//     <td>£' + takeHome'</td>
//   </tr>
//
//   <tr>
//     <th>Tax</th>
//     <td>£' + totalTax'</td>
//   </tr>
//
//   <tr>
//     <th>National Insurance</th>
//     <td>£' + nationalInsurance'</td>
//   </tr>
// </table>

// yearly into monthly calculations
// const takeHomeMonthly = (takeHome / 12).toFixed(2)
// const totalTaxMonthly = (totalTax / 12).toFixed(2)
// const nationalInsuranceMonthly = (totalNI / 12).toFixed(2)


// take home monthly break down
// const takeHomeMonthlyTable =
// <table class="resultsTable">
//   <tr>
//     <th>Take Home</th>
//     <td>'£' + 'takeHomeMonthly'</td>
//   </tr>
//
//   <tr>
//     <th>Tax</th>
//     <td>'£' + totalTaxMonthly'</td>
//   </tr>
//
//   <tr>
//     <th>National Insurance</th>
//     <td>'£' + nationalInsuranceMonthly'</td>
//   </tr>
// </table>
