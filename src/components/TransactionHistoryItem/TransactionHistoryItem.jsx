import PropTypes from 'prop-types';
import styles from './TransactionHistoryItem.module.css'

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};

TransactionHistoryItem.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
};

export default TransactionHistoryItem;
