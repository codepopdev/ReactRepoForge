import "./App.css";
import { RouterProvider } from "react-router";
import router from "./components/shared/routes/Router";
import AuthProvidter from "./components/shared/utils/context/AuthContext";

function App() {
  return (
    <>
      <AuthProvidter>
        <RouterProvider router={router} />,
      </AuthProvidter>
    </>
  );
}

export default App;
