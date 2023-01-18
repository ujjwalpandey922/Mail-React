import { NavLink } from "react-router-dom";
import { useMailContext } from "../Context/MailContext";
import "./deleted.css";

const Deleted = () => {
  const { deleted, setDeleted } = useMailContext();
  console.log(deleted);
  return (
    <div className="deleted">
      {deleted.length == 0 ? (
        <b>No Deleted Mails</b>
      ) : (
        <div className="inbox">
          {deleted.map((mail) => (
            <div
              className="singleMailList"
              key={mail.mId}
              to={"/inbox/" + mail.mId}
            >
              <h5>SUBJECT :{mail.subject}</h5>
              <p>{mail.content.substring(0, 50)}..... </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Deleted;

Deleted;
