import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import GoogleShare from "./Components/GoogleAuth-Share";
import Home from "./Components/Home";
import GetInput from "./Components/GetInput/GetInput";

function App () {
  const publicRoutes = [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "/googleAuth",
      component: <GoogleShare />,
    },
    {
      path: "/getinput",
      component: <GetInput/>,
    },
  ];
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, i) => {
          return (
            <Route key={i + 1} path={route.path} element={route.component} />
          );
        })}
      </Routes>
    </Router>
  );
}
export default App;