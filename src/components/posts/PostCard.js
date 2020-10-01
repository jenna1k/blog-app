import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white overflow-hidden hover:bg-green-100 border border-gray-200 m-2 text-left shadow">
      <Link to={`/post/${post.id}`}>
        <div className="px-6 py-4">
          <p className="font-semibold text-base capitalize mb-2 truncate">
            {post.title}
          </p>
          <p className="font-thin text-base mb-2 capitalize truncate">
            by {post.authorFirstName} {post.authorLastName},{" "}
            {new Date(post.createdAt).toDateString()}
          </p>
          <p className="text-gray-700 text-base truncate pt-4">
            {post.content}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
