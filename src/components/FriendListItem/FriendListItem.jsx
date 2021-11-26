import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      {isOnline ? (
        <span className={styles.Status} style={{ backgroundColor: 'green' }}>
          {isOnline}
        </span>
      ) : (
        <span className={styles.Status} style={{ backgroundColor: 'red' }}>
          {isOnline}
        </span>
      )}
      <img
        className={styles.Avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.Name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
