import { createContext, useContext, useState } from "react";
import AllMail from "../Mail-React/inbox.json";
import AllSpam from "../Mail-React/spam.json";
const MailContext = createContext();

export const MailContextProvider = ({ children }) => {
  const [mail, setMail] = useState(AllMail);
  const [spam, setSpam] = useState(AllSpam);
  const [deleted, setDeleted] = useState([]);

  return (
    <MailContext.Provider
      value={{ mail, setMail, spam, setSpam, deleted, setDeleted }}
    >
      {children}
    </MailContext.Provider>
  );
};

export const useMailContext = () => useContext(MailContext);
