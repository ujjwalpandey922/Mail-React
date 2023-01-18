import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Options from "./components/Options";

import Custom from "./Pages/Custom";
import Deleted from "./Pages/Deleted";
import Spam from "./Pages/Spam";
import SingleMail from "./Pages/SingleMail";
import Home from "./Pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="HomeContainer">
          <Options />
          <div className="view">
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
              </Route>
              <Route path="inbox" element={<List />}>
                <Route path=":id" element={<SingleMail />} />
              </Route>

              <Route path="spam" element={<Spam />}>
                <Route path=":id" element={<SingleMail />} />
              </Route>
              <Route path="deleted" element={<Deleted />} />
              <Route path="custom" element={<Custom />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
