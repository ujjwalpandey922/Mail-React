import { NavLink, Outlet } from "react-router-dom";
import { useMailContext } from "../Context/MailContext";
const Spam = () => {
  const { spam } = useMailContext();

  const date = new Date().toLocaleString();
  return (
    <div className="list">
      <div className="inbox">
        {spam.map((mail) => (
          <NavLink
            className={`singleMailList ${mail.unread ? "seen" : ""} `}
            key={mail.mId}
            to={mail.mId}
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

export default Spam;
