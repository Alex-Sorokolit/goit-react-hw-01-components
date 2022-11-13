import PropTypes from "prop-types";
import { History, Head, Cell, Row } from "./Transaction.styled";
function Transaction(props) {
  const { items } = props;
  return (
    <History>
      <thead>
        <tr>
          <Head>Type</Head>
          <Head>Amount</Head>
          <Head>Currency</Head>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <Row key={item.id} typeRow={item.type}>
            <Cell>{item.type}</Cell>
            <Cell>{item.amount}</Cell>
            <Cell>{item.currency}</Cell>
          </Row>
        ))}
      </tbody>
    </History>
  );
}

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

export default Transaction;
