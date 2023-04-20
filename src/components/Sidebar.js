import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Sidebar() {
  // use useSelectore to subscribe to store
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="sidbar">
      <ul className="first-sidebar">
        <li className="homeicon">
          <Link className="Link1" to="/">
            Home
          </Link>
        </li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Science</li>
      </ul>

      <ul>
        <h5>Subscriptions</h5>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Prime</li>
      </ul>

      <ul>
        <h5>Explore</h5>
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Your Clip</li>
        <li>Show More</li>
      </ul>

      <ul>
        <h5>Subscriptions</h5>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Prime</li>
      </ul>
      <ul>
        <h5>Subscriptions</h5>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Prime</li>
      </ul>

      <ul>
        <h5>Explore</h5>
        <li>Trending</li>
        <li>Shoping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>News</li>
        <li>Learning</li>
      </ul>
    </div>
  );
}

export default Sidebar;
