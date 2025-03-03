import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/app.scss";
import "./assets/css/output.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
