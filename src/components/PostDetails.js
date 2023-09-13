import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostLists from "./reusables/PostLists";
const PostDetails = ({ title, body }) => {
  const [postDetails, setpostDetails] = useState(null);
  const [userComments, setUserComments] = useState(null);
  const { id } = useParams();
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => {
        console.log("OneData", res.data);
        setpostDetails(res.data);
      });
  };
  const getComments = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => {
        console.log(res.data, "comments");
        setUserComments(res.data);
      });
  };
  useEffect(() => {
    getComments();
  }, []);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>
        <PostLists title={postDetails?.title} body={postDetails?.body} />
      </div>
      <div>
        <h1 className="text-lg font-bold">Comments</h1>
        {userComments?.map((item) => (
          <div className="border-2 border-cyan-950  p-2 m-3">
            <h1>Name:{item.name}</h1>
            <h1>Email:{item.email}</h1>
            <h1>Comment:{item.body}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetails;
