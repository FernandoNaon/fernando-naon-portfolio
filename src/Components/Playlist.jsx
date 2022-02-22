import React from "react";
import style from "./Playlist.module.css";
const Playlist = () => {
  return (
    <div className={style.playlistContainer}>
      <div className={style.playlist}>
        <div>
          <p>
            Besides web developer i'm a muscician, so here you can listen to
            some of bands i played.
          </p>
        </div>
        <iframe
          title="my playlist"
          src="https://open.spotify.com/embed/playlist/386Vlgp4tAg1fX073ypI3k"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  );
};

export default Playlist;
