import React from "react";

const PostLists = ({ title, body }) => {
  return (
    <div>
      <div className='border-2 border-cyan-950  p-2 m-3'>
        <p>Title:{title}</p>
        <p>Description:{body}</p>
      </div>
    </div>
  );
};

export default PostLists;
