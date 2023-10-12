// [
//   { id: 'id-1', label: '.docx', percentage: 22 },
//   { id: 'id-2', label: '.pdf', percentage: 4 },
//   { id: 'id-3', label: '.mp3', percentage: 17 },
//   { id: 'id-4', label: '.psd', percentage: 47 },
//   { id: 'id-5', label: '.pdf', percentage: 10 },
// ];

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(data => {
          return (
            <li className="item" key={data.id}>
              <span className="label">{data.label}</span>
              <span className="percentage">{data.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
