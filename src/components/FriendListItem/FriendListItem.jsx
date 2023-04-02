import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'

const FriendListItem = ({ item }) => {
  return (
            <li className={css.item}>
              <span className={css.status} style={{backgroundColor: item.isOnline ? 'red':'green'}}></span>
              <img className={css.avatar} src={item.avatar} alt="User avatar" width="48" />
              <p className={css.name}>{item.name}</p>
            </li>
  );
};

FriendListItem.propTypes = {
    friends: PropTypes.array,
  };

export default FriendListItem;