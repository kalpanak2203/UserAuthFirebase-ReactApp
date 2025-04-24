import React from 'react';
import './RightSidebar.css';
import Images from '../Assets/Images';

const users = [
  {
    name: 'Thomas Edward',
    handle: '@thewildwithyou',
    background: Images.RightSideBar1,
    avatar: Images.RSBAvatar1
  },
  {
    name: 'Chris Doe',
    handle: '@thewildwithyou',
    background: Images.RightSideBar2,
    avatar: Images.RSBAvatar2
  },
  {
    name: 'Emilie Jones',
    handle: '@thewildwithyou',
    background: Images.RightSideBar3,
    avatar: Images.RSBAvatar3
  },
  {
    name: 'Jessica Williams',
    handle: '@thewildwithyou',
    background: Images.RightSideBar4,
    avatar: Images.RSBAvatar4
  },
  // {
  //   name: 'Michela Stone',
  //   handle: '@thewildwithyou',
  //   background: Images.RightSideBar5,
  //   avatar: Images.RSBAvatar4
  // }
];

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="tabs">
        <button className="active">Artists</button>
        <button>Photographers</button>
      </div>

      <div className="user-cards">
        {users.map((user, index) => (
          <div className="user-card" key={index} style={{ backgroundImage: `url(${user.background})` }}>
            <div className="user-details">
              <div>
                <div className='AvatarOnline'></div>
              <img src={user.avatar} alt="user" ></img>
              </div>
              <div>
                <h4>{user.name}</h4>
                <p>{user.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <a>Privacy</a>
        <a>Terms of Service</a>
        <a>Cookie Notice</a>
      </footer>
    </div>
  );
};

export default RightSidebar;
