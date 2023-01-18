import "./options.css";
import { NavLink } from "react-router-dom";

const Options = () => {
  return (
    <div className="options">
      <ul>
        <NavLink to={"/inbox"}>Inbox</NavLink>
        <NavLink to={"/spam"}>Spam </NavLink>
        <NavLink to={"/deleted"}>Deleted Items </NavLink>
        <NavLink to={"/custom"}>Custom Folder </NavLink>
      </ul>
    </div>
  );
};

export default Options;
