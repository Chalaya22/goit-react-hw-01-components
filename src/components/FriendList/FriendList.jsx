import css from './Friend.module.css';

const FriendList = ({ friends }) => {
  return (
    <section className={css.friendSection}>
      <ul className={css.friendLlist}>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <li className={css.item} key={id}>
              {isOnline ? (
                <span className={css.statusIsOnline}></span>
              ) : (
                <span className={css.statusIsOffline}></span>
              )}
              <img className={css.avatar} src={avatar} alt={name} width="48" />
              <p className={css.name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FriendList;
