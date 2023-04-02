import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem'

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map((item, index) => {
        return <FriendListItem key={index} item={item} />
      })}
    </ul>
  );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
  };

export default FriendList;