import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem.jsx';
import styles from './FriendList.module.css';

export default function FriendList({ friends}) { 
    return (
        <ul className={styles.friend_list}>
        {friends.map(friend => {
            return <FriendListItem key={friend.id} {...friend} />;
        })}
        </ul>
    );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};