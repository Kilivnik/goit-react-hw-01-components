import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export default function TransactionHistory({items}) {
    return (
        <table className={styles.transaction_history}>
            <thead className={styles.thead}>
                <tr className={styles.tr}>
                <th className={styles.th}>Type</th>
                <th className={styles.th}>Amount</th>
                <th className={styles.th}>Currency</th>
                </tr>
            </thead>

            <tbody className={styles.tbody}>
                {items.map(({ id, type, amount, currency }) => (
                    <tr className={styles.tr} key={id}>
                    <td className={styles.td}>{type}</td>
                    <td className={styles.td}>{amount}</td>
                    <td className={styles.td}>{currency}</td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};
