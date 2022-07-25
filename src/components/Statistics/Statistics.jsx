import PropTypes from 'prop-types';

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export default function Statistics({ title, stats }) {
    return (
        <section>
            {title && <h2 className={stats.title}>{title}</h2>}
            <ul>
                {stats.map(stat => (
                    <li key={stat.id}
                        style={{ backgroundColor: generateColor() }}
                    >
                        <span>{stat.label}</span>
                        <span>{stat.percentage}%</span>
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