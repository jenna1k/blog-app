import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="max-w-sm rounded mb-2 overflow-hidden shadow-lg">
      <Link to={`/post/${post.id}`}>
        <div className="px-6 py-4 bg-green-500">
          <div className="font-bold text-xl mb-2">{post.title}</div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <p className="text-gray-700 text-base">{post.content}</p>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {post.authorFirstName} {post.authorLastName}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
