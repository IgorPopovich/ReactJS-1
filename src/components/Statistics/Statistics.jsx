import PropTypes from 'prop-types';
import css from './Statistics.module.css'

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>
        <ul className={css.list}>
            {stats.map((item, i) => {
              let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                return <li className={css.item} style={{ backgroundColor: `#${randomColor}` }} key={i}>
                        <span className={css.label}>{item.label}</span>
                        <span className={css.quantity}>{item.percentage}%</span>
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