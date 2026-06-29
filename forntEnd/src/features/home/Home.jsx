import React from "react";
import "./home.scss";
import boy from "../../assets/boy.png";
import "remixicon/fonts/remixicon.css";
import PostCard from "../posts/pages/PostCard";
// import { RiHeart3Fill } from "react-icons/ri";
const Home = () => {
  return (
    <>
      <main>
        <div className="left-content"></div>
        <div className="center-content">
          <div className="main-content">
            {/* <div className="post-card">
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
            </div> */}
            <PostCard />
            {/* <PostCard /> */}
          </div>
        </div>
        {/* <div className="right-content"></div> */}
      </main>
    </>
  );
};

export default Home;
