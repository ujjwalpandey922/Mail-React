import { useLocation } from "react-router-dom";
import "./home.css";

const Home = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="home">
      {location.state == null && (
        <div className="opening">
          <img src="data:image/jpeg;base64,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" />
          <h4> Welcome To Outlook....</h4>
        </div>
      )}

      <>
        {location.state && location.state.length > 0 && (
          <div className="inbox">
            {location.state.map((mail) => (
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
      </>
      <>
        {location.state && location.state.length == 0 && (
          <h3>No Results Found Try Again </h3>
        )}
      </>
    </div>
  );
};

export default Home;