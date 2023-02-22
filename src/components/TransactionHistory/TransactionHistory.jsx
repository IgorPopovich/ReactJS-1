import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transaction}>
            <thead>
                <tr className={css.thead}>
                    <th className={css.title}>Type</th>
                    <th className={css.title}>Amount</th>
                    <th className={css.title}>Currency</th>
                </tr>
            </thead>

            <tbody>
            {items.map((item, i) => {
            return <tr key={item.id}  className={css.tbody}>
                        <td className={css.td}>{item.type}</td>
                        <td className={css.td}>{item.amount}</td>
                        <td className={css.td}>{item.currency}</td>
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