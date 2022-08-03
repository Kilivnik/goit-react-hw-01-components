import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

export default function FriendListItem({ avatar, isOnline, name }) {
  return (
    <li className={styles.item}>
      <span
        className={isOnline ? styles.status_online : styles.status_offline}
      ></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
}
