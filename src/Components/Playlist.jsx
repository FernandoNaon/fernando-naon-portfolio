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
          Besides web developer i'm a muscician, so here you can listen to some
          of the bands that i played.
        </p>
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
