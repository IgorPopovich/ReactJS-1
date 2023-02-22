import './Statistics.css'

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
        <h2 className="title">{title}</h2>
        <ul className="stat-list">
            {stats.map((item, i) => {
                return <li className="item" key={i}>
                        <span className='label'>{item.label}</span>
                        <span className='quantity'>{item.percentage}</span>
                    </li>;
            })}
        </ul>
    </section>
  );
};

export default Statistics;