import FriendListItem from '../FriendListItem/FriendListItem';
import css from './Friend.module.css';

const FriendList = ({ friends }) => {
  return (
    <section className={css.friendSection}>
      <ul className={css.friendLlist}>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          );
        })}
      </ul>
    </section>
  );
};
export default FriendList;
