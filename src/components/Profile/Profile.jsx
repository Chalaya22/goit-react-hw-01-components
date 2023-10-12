// const user = {
//   username: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
import css from './Profile.module.css';

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
        <li className={css.statsList}>
          <span className={css.label}>followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.statsList}>
          <span className={css.label}>views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.statsList}>
          <span className={css.label}>likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </section>
  );
};

export default Profile;
