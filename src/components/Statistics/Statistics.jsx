import PropTypes from 'prop-types';
import css from './Statistics.module.css'
import { randomColor } from '../../utils'

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.list}>
            {stats.map((item, i) => {
                return <li className={css.item} style={{ backgroundColor: `#${randomColor()}` }} key={i}>
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
  stats: PropTypes.arrayOf(PropTypes.object),
};

export default Statistics;