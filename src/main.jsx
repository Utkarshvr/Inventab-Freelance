import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AuthContextProvider from "./context/authContext.jsx";
import SelectedYrContextProvider from "./context/selectedYrContext.jsx";

import "./index.css";
import UserProfileModalContextProvider from "./context/UserProfileModalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <AuthContextProvider>
    <SelectedYrContextProvider>
      <UserProfileModalContextProvider>
        <App />
      </UserProfileModalContextProvider>
    </SelectedYrContextProvider>
  </AuthContextProvider>

  // </React.StrictMode>,
);
