import PropTypes from 'prop-types';
import css from './Profile.module.css'

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
        <ul className={css.stats}>
          {Object.keys(stats).map(item => (
            <li className={css.item} key={item}>
              <span className={css.label}>{item}</span>
              <span className={css.quantity}>{stats[item]}</span>
            </li>
          ))}
        </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;

