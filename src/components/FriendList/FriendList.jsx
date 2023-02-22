import PropTypes from 'prop-types';
import css from './FriendList.module.css'

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
        {friends.map((item, i) => {
            return <li key={item.id} className={css.item}>
                        <span className={css.status} style={{backgroundColor: item.isOnline ? 'red':'green'}}></span>
                        <img className={css.avatar} src={item.avatar} alt="User avatar" width="48" />
                        <p className={css.name}>{item.name}</p>
                    </li>
        })}
    </ul>
  );
};

FriendList.propTypes = {
    friends: PropTypes.array,
  };

export default FriendList;