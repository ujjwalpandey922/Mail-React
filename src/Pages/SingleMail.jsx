import "./singleMail.css";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useMailContext } from "../Context/MailContext";
import { AiFillDelete } from "react-icons/ai";
const SingleMail = () => {
  const { mail, spam, setDeleted, setMail, setSpam, deleted } =
    useMailContext();
  const [currentUser, setCurrentUser] = useState({});
  const id = useParams();
  const path = useLocation();
  const navTo = useNavigate();
  useEffect(() => {
    let TempcurrentUser =
      mail.find((e) => e.mId == id.id) || spam.find((e) => e.mId == id.id);
    if (!TempcurrentUser.unread) {
      TempcurrentUser.unread = true;
      if (path.pathname.includes("inbox")) {
        let remaining = mail.filter((e) => e.mId !== TempcurrentUser.mId);
        setMail([...remaining, TempcurrentUser]);
      } else {
        let remaining = spam.filter((e) => e.mId !== TempcurrentUser.mId);
        setSpam([...remaining, TempcurrentUser]);
      }
    }
    setCurrentUser(TempcurrentUser);
  }, [id]);
  //delete User
  const handleClick = () => {
    setDeleted((pre) => [...pre, currentUser]);
    if (path.pathname.includes("inbox")) {
      let remaining = mail.filter((e) => e.mId !== currentUser.mId);
      setMail(remaining);
      navTo("/inbox");
    } else {
      let remaining = spam.filter((e) => e.mId !== currentUser.mId);
      setSpam(remaining);
      navTo("/spam");
    }
  };

  // console.log(id, mail, currentUser, deleted, spam);
  return (
    <div className="singlemail">
      <div className="avatar">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPGaYHe-gxdnOp0xFsBa8JKdx61RiA-qV3Q&usqp=CAU"
          alt="img"
        />
        <AiFillDelete onClick={handleClick} />
      </div>
      <div className="Content">
        <h4>Subject : </h4>
        <span>{currentUser.subject}</span>
        <h4>Content : </h4>
        <p>{currentUser.content}</p>
      </div>
    </div>
  );
};

export default SingleMail;
