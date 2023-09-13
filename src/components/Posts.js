import React, { useEffect, useState } from "react";
import PostLists from "./reusables/PostLists";
import axios from "axios";
import { Link } from "react-router-dom";

const Posts = () => {
  const [postData, setPostData] = useState(null);
  const getPostData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log("post response", response.data);
        setPostData(response.data);
      });
  };
  useEffect(() => {
    getPostData();
  }, []);
  return (
    <div>
      <div>
        {postData?.map((item) => (
          <Link to={`postDetails/${item.id}`}>
            <PostLists title={item.title} body={item.body} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Posts;
