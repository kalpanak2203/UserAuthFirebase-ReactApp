import React from 'react';
import './PostCard.css';
import { AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Images from '../Assets/Images';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <img src={post.avatar} alt="user" className="avatar"/>
        <div className="user-info">
          <h4>{post.username}</h4>
          <p>{post.handle}</p>
        </div>
        <BsThreeDotsVertical className="menu-icon" />
      </div>

      <p className="post-text">
        {post.text} <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  <span className="read-more">Read More</span></p>
      </p>

      <img src={post.image} alt="post content" className="post-image" />
      <div className='line'></div>

      <div className="reactions">
        <div className="reactionContainer"><AiOutlineHeart />{post.likes}</div>
        <div className="reactionContainer"><AiOutlineComment />{post.comments}</div>
        <div className="reactionContainer"><AiOutlineShareAlt />{post.shares}</div>
      </div>
    </div>
  );
};

export default PostCard;
