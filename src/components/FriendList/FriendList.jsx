import FriendListItem from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css'

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.FriendList}>
      {friends.map(friend => (
        <li className={styles.Item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
