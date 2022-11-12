import PropTypes from "prop-types";
import css from "./Transaction.module.css";
function Transaction(props) {
  const { items } = props;
  return (
    <table className={css.history}>
      <thead>
        <tr>
          <th className={css.head}>Type</th>
          <th className={css.head}>Amount</th>
          <th className={css.head}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id} className={`${css.row} ${css[item.type]}`}>
            <td className={css.data}>{item.type}</td>
            <td className={css.data}>{item.amount}</td>
            <td className={css.data}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

export default Transaction;
