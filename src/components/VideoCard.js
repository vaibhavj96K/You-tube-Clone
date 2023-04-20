import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  let views = "";
  if (statistics.viewCount >= 1000000) {
    views = (statistics.viewCount / 1000000).toFixed(1) + "M";
  } else if (statistics.viewCount >= 1000) {
    views = (statistics.viewCount / 1000).toFixed(1) + "K";
  } else {
    views = statistics.views;
  }
  return (
    <div className="video-card">
      <img alt="thumbnail" src={thumbnails.medium.url} />
      <ul className="list">
        <li className="bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{views} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
