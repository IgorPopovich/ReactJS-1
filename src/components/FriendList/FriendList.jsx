import PropTypes from 'prop-types';
import './FriendList.css'

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
        {friends.map((item, i) => {
            return <li key={item.id} className="item">
                        <span className="status" style={{backgroundColor: item.isOnline ? 'red':'green'}}></span>
                        <img className="avatar" src={item.avatar} alt="User avatar" width="48" />
                        <p className="name">{item.name}</p>
                    </li>
        })}
    </ul>
  );
};

FriendList.propTypes = {
    friends: PropTypes.array,
  };

export default FriendList;