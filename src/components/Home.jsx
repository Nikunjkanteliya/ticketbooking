import React from "react";
import style from "./style/home.module.css";
import UncontrolledExample from "./Carsoule";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <header className={`${style.head}`}>
        <img
          src="https://img.freepik.com/premium-vector/initial-letter-c-with-film-strip-reel-cinema-movie-production-logo-design-vector_493994-1369.jpg?w=106"
          alt="logo"
        />
        <p className={`${style.logo}`}> BOOK A TICKET</p>
      </header>

      <marquee behavior="" direction="left" scrollamount="10">
        {" "}
        DAILY 4 SHOWS FIRSTSHOW (9AMTO12PM) SECOND SHOW(1PMTO3PM) THIRD SHOW
        (4PM TO 7PM) FOURTH SHOW (9PM TO 12PM)
      </marquee>
      <UncontrolledExample />
      <div className={`${style.allmovies}`}>
        <div>
          <iframe
            className={`${style.iframes}`}
            width="600"
            height="350"
            src="https://www.youtube.com/embed/7j1aKxsKI3s"
            title="THE BEGINNING OF KANTARA😍 | Kantara (Hindi) | Netflix India"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <Link to={"/kantara"} target="_blank">
            {" "}
            <div className={`${style.movies}`}> BOOK A TICKET </div>
          </Link>
        </div>

        <div>
          <iframe
            className={`${style.iframes}`}
            width="600"
            height="350"
            src="https://www.youtube.com/embed/vqu4z34wENw"
            title="Pathaan | Official Trailer | Shah Rukh Khan | Deepika Padukone | John Abraham | Siddharth Anand"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <Link to={"/pathan"} target="_blank">
            {" "}
            <div className={`${style.movies}`}> BOOK A TICKET </div>
          </Link>
        </div>

        <div>
          <iframe
            className={`${style.iframes}`}
            width="600"
            height="350"
            src="https://www.youtube.com/embed/NxhEZG0k9_w"
            title="Fast &amp; Furious 8 - Official Trailer 2 (Universal Pictures) HD"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <Link to={"/fastandfurious"} target="_blank">
            {" "}
            <div className={`${style.movies}`}> BOOK A TICKET </div>
          </Link>
        </div>

        <div>
          <iframe
            className={`${style.iframes}`}
            width="600"
            height="350"
            src="https://www.youtube.com/embed/qN3wfuPYTI4"
            title="LEO - Bloody Sweet Promo | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <Link to={"/Leo"} target="_blank">
            {" "}
            <div className={`${style.movies}`}> BOOK A TICKET</div>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
