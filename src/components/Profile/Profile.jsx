import './Profile.css'

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>
        <ul className="stats">
          {Object.keys(stats).map(item => (
            <li key={item}>
              <span className='label'>{item}</span>
              <span className='quantity'>{stats[item]}</span>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Profile;
