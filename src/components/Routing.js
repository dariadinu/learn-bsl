import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../pages/App";
import { NewPage } from "../pages/NewPage";
import { Home } from "../pages/Home";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game1" element={<App />} />
        <Route path="/new-game" element={<NewPage />} />
        {/*<Route index element={<Home />} />*/}
        {/*<Route path="blogs" element={<Blogs />} />*/}
        {/*<Route path="contact" element={<Contact />} />*/}
        {/*<Route path="*" element={<NoPage />} />*/}
      </Routes>
    </BrowserRouter>
  );
};