import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionTablle}>
      <thead className={css.tabHead}>
        <tr className={css.tabHeadRow}>
          <th className={css.type}>Type</th>
          <th className={css.amount}>Amount</th>
          <th className={css.currency}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.tableBodyRow} key={id}>
              <td className={css.typeBody}>{type}</td>
              <td className={css.amountBody}>{amount}</td>
              <td className={css.currensyBody}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
