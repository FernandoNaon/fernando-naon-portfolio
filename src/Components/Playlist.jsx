import React, { useState, useEffect } from "react";
import style from "./Playlist.module.css";
const Playlist = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={style.playlistContainer}>
      <div className={style.description}>
        <p>
          Besides being a web developer i'm a musician, Below you can listen to
          some of the bands where I played
        </p>
        <p>Enjoy!</p>
      </div>
      <div className={style.playlist}>
        <iframe
          title="my playlist"
          src="https://open.spotify.com/embed/playlist/386Vlgp4tAg1fX073ypI3k"
          width="300"
          height="350"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  );
};

export default Playlist;
