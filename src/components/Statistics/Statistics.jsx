import PropTypes from 'prop-types';
import './Statistics.css'

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
        <h2 className="title">{title}</h2>
        <ul className="stat-list">
            {stats.map((item, i) => {
              let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                return <li className="item" style={{ backgroundColor: `#${randomColor}` }} key={i}>
                        <span className='label'>{item.label}</span>
                        <span className='quantity'>{item.percentage}%</span>
                    </li>;
            })}
        </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;