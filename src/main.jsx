import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AuthContextProvider from "./context/authContext.jsx";
import SelectedYrContextProvider from "./context/selectedYrContext.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <AuthContextProvider>
    <SelectedYrContextProvider>
      <App />
    </SelectedYrContextProvider>
  </AuthContextProvider>

  // </React.StrictMode>,
);
