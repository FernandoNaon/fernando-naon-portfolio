import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.aboutContainer}>
        <p className={style.text}>
          I'm Fernando, an enthusiastic full-stack web developer driven by
          curiosity, creativity, respect and responsibility.
        </p>
        <p className={style.text}>
          I describe myself as a mostly self-taught, versatile, organized and
          fast-learning person who enjoys constantly enhancing his skills while
          keeping an eye on what’s next.
        </p>
        {/* <p className={style.text}>
          I'm looking for the opportunity to get a job alongside people who are
          passionate about what they're doing, and most importantly, to be able
          to grow as a professional.
        </p> */}
        <p className={style.text}>
          I also believe that diversity and inclusion are key players in
          teamwork.
        </p>
      </div>
    </div>
  );
};

export default About;
