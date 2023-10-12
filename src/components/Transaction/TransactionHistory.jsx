const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead className="t-head">
        <tr className="t-head-row">
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className="t-body">
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className="t-body-row" key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
