import PropTypes from 'prop-types';
import './TransactionHistory.css'

const TransactionHistory = ({ items }) => {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
            {items.map((item, i) => {
            return <tr key={item.id} className="item">
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
            })}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    stats: PropTypes.array,
  };

export default TransactionHistory;