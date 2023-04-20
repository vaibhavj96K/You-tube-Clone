import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState } from "react";
import { useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

function Head() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    //API CALL
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }

      return () => {
        clearInterval(timer);
      };
    }, 200);
  }, [searchQuery]);
  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="head-main">
      <div className="head-yt-logo">
        <img
          onClick={() => toggleMenuHandler()}
          alt="hmlogo"
          src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"
        />

        <img
          alt="ytlogo"
          src="https://tse4.mm.bing.net/th?id=OIP.D6pZbfI9woOeLhEVMyaoyQHaDi&pid=Api&P=0"
        />
      </div>
      <div className="search">
        <div>
          <input
            type="text"
            placeholder="Search...!"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button>Search</button>
        </div>

        {showSuggestion && (
          <div className="searchSuggestion">
            <ul className="margin">
              {suggestion.map((s) => (
                <li key={s}>🔍{s} </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          className="user-icon"
          alt="userIcon"
          src="https://tse2.mm.bing.net/th?id=OIP.loKKNQfqb7LzxjKU7CRyiAHaHa&pid=Api&P=0"
        />
      </div>
      <div className="bell-icon">
        <img
          className="user-icon"
          alt=""
          src="https://tse3.mm.bing.net/th?id=OIP.cIJkWFGSb5wOiTnJ2wzBVwHaHa&pid=Api&P=0"
        />
      </div>
      <div className="video-icon">
        <img
          className="user-icon"
          alt="video-icon"
          src="https://www.vanhulzen.com/wp-content/uploads/2018/10/kisspng-documentary-film-computer-icons-cinema-video-icon-5ad4fc023e44d7.1171977115239075862551.png"
        />
      </div>
    </div>
  );
}

export default Head;
