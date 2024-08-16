import { React, useEffect, useState } from "react";
import styles from "./gallery.module.css";
import Card from "../card/Card";
import axios from "axios";
import { Link } from "react-router-dom";

const Gallery = (props) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errormsg, setErrormsg] = useState("");
  const [x, setX] = useState([]);

  const getAllBooks = () => {
    const apiurl = "http://localhost:8089/getAllBooks";
    axios
      .get(apiurl)
      .then((res) => {
        console.log(res);
        setX(res.data);
        setError(false);
      })
      .catch((err) => {
        console.error("Add failed:", err.response.data);
        setErrormsg(err.response.data);
        setError(true);
        setSuccess(false);
      });
  };

  const displayBooks = () => {
    console.log("here is x:", x);

    return x.toReversed().slice(0, 7).map((book) => {
      return (
        <Card
          key={book.bookID}
          obj={book}
          refresh={getAllBooks}
          usid={localStorage.getItem("id")}
          usertype="user"
        />
      );
    });
  };

  useEffect(getAllBooks, []);
  return (
    <>
      <div className={`${styles.gallery}`}>
        <div className={`${styles.container}`}>
          <h4>Book Gallery</h4>
          <h2 className={`${styles.philosopherbold}`}>Our Recent Books</h2>
          <div className={styles.scroller}>
          <div className={`${styles.cards}`}>{displayBooks()}</div>
          </div>
          <Link to={"/bookshelf"}>
            <button>Show All Books</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Gallery;
