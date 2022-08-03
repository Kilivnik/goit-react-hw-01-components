import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export default function Statistics({ title, stats }) {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.stat_list}>
                {stats.map(stat => (
                    <li key={stat.id}
                        style={{ backgroundColor: generateColor() }}
                    >
                        <span className={styles.label}>{stat.label}</span>
                        <span className={styles.percentage}>{stat.percentage}%</span>
                    </li>
                    
                )
                )}
                 
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
}