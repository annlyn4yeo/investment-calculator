import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInputObject }) {
  const resultsData = calculateInvestmentResults(userInputObject);
  const initialMoneyPutIn =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Values</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const totalInterestEarned =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialMoneyPutIn;
          const totalInvested = yearData.valueEndOfYear - totalInterestEarned;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterestEarned)}</td>
              <td>{formatter.format(totalInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
