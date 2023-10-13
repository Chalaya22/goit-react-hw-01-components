import css from './Statistic.module.css';
import createRandomColor from '../../helpers/createRandomColor';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(data => {
          return (
            <li
              className={css.item}
              key={data.id}
              style={{ backgroundColor: createRandomColor() }}
            >
              <span className={css.label}>{data.label}</span>
              <span className={css.percentage}>{data.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
