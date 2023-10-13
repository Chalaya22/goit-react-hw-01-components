import css from './Profile.module.css';
import createRandomColor from '../../helpers/createRandomColor';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <section className={css.profile}>
      <div className={css.presintations}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li
          className={css.statsList}
          style={{ backgroundColor: createRandomColor() }}
        >
          <span className={css.label}>followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li
          className={css.statsList}
          style={{ backgroundColor: createRandomColor() }}
        >
          <span className={css.label}>views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li
          className={css.statsList}
          style={{ backgroundColor: createRandomColor() }}
        >
          <span className={css.label}>likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </section>
  );
};

export default Profile;
