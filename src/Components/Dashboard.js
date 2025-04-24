import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import RightSidebar from './RightSidebar';
import PostCard from './PostCard';
import ProductGrid from './ProductGrid';
import Images from '../Assets/Images';
import './Dashboard.css';




const dummyPosts = [
  {
    id: 1,
    title: 'Post 1',
    content: 'Content for post 1.',
    image: Images.PostCardImg1,
    avatar: Images.AvatarPC1,
    username: "Lara Leones",
    handle: "@thewallart",
    likes: " 9.8 k",
    comments: " 8.6 k",
    shares: " 7.2 k"


  },
  {
    id: 2,
    title: 'Post 2',
    content: 'Content for post 2.',
    image: Images.PostCardImg2,
    avatar: Images.AvatarPC2,
    username: "Thomas J",
    handle: "@thecustomcreator",
    likes: " 9.8 k",
    comments: " 8.6 k",
    shares: " 7.2 k"
  }
];

function App() {


  return (
    <div className="app">
      <Sidebar />

      <Topbar />

      <div style={{ marginLeft: '260px', marginRight: '260px', marginTop: '100px' }}>
        {dummyPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}

        <ProductGrid />
      </div>

      <RightSidebar />
    </div>
  );
}

export default App;
