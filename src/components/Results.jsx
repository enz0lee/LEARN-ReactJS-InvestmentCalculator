import { calculateInvestmentResults, formatter } from '../util/investment'

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input)
  // const initialInvestment = formatter.format(input.initialInvestment)
  console.log(input, resultsData)

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Invesment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>
                {formatter.format(
                  yearData.valueEndOfYear -
                    input.initialInvestment -
                    input.annualInvestment * yearData.year
                )}
              </td>
              <td>
                {formatter.format(
                  input.initialInvestment +
                    input.annualInvestment * yearData.year
                )}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
