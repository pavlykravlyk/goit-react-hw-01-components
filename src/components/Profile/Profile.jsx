import PropTypes from 'prop-types';
import styles from './Profile.module.css'

const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={styles.Profile} key={tag}>
      <div className={styles.Description}>
        <img src={avatar} alt={username} className={styles.Avatar} />
        <p className={styles.Name}>{username}</p>
        <p className={styles.Tag}>@{tag}</p>
        <p className={styles.Location}>{location}</p>
      </div>

      <ul className={styles.Stats}>
        <li>
          <span className={styles.Label}>Followers</span>
          <span className={styles.Quantity}>{followers}</span>
        </li>
        <li>
          <span className={styles.Label}>Views</span>
          <span className={styles.Quantity}>{views}</span>
        </li>
        <li>
          <span className={styles.Label}>Likes</span>
          <span className={styles.Quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
