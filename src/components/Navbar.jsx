import "./navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useMailContext } from "../Context/MailContext";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navTo = useNavigate();
  const [info, setInfo] = useState("");
  const { mail, spam } = useMailContext();
  const handleClick = () => {
    let result = mail.filter(
      (e) =>
        e.content.toLowerCase().includes(info) ||
        e.subject.toLowerCase().includes(info)
    );
    navTo("/", { state: result });
    setInfo("");
  };
  return (
    <div className="navbar">
      <div className="logo">
        <h3>OutLook-Clone</h3>
      </div>
      <div className="input">
        <AiOutlineSearch onClick={handleClick} />

        <input
          type="text"
          onChange={(e) => setInfo(e.target.value)}
          value={info}
          placeholder="Search... "
        />
      </div>
      <img src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=2000" />
    </div>
  );
};

export default Navbar;
