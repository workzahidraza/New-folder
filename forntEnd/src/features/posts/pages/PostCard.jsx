import React, { useEffect } from "react";
// import "../../home/home.css";
import boy from "../../../assets/boy.png";
import "remixicon/fonts/remixicon.css";
import { createPost } from "../services/post.api";

const PostCard = () => {
  useEffect(() => {
    const data = async () => {
      await createPost.data;
    };
    console.log(data());
  }, []);

  return (
    <>
      <div className="post-card">
        <div className="top-profile">
          <img src={boy} alt="" />
          <h2>username</h2>
          <button>follow</button>
        </div>
        <div className="center-profile">
          <img src={boy} alt="" />
        </div>
        <div className="bottom-profile">
          <div className="left-icons">
            <i class="ri-heart-line"></i>
            <i class="ri-share-forward-line"></i>
            <i class="ri-download-line"></i>
          </div>
          <div className="rigth-icons">
            <i class="ri-bookmark-line"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
