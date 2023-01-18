import { NavLink, Outlet } from "react-router-dom";
import { useMailContext } from "../Context/MailContext";
import "./list.css";

const List = () => {
  const { mail } = useMailContext();
  const date = new Date().toLocaleString();

  return (
    <div className="list">
      <div className="inbox">
        {mail.map((mail) => (
          <NavLink
            className={`singleMailList ${mail.unread ? "seen" : ""} `}
            key={mail.mId}
            to={"/inbox/" + mail.mId}
          >
            <h5>SUBJECT :{mail.subject}</h5>
            <p>{mail.content.substring(0, 50)}..... </p>
            <hr />
            <div className="date">{date}</div>
          </NavLink>
        ))}
      </div>
      <div className="Outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default List;
