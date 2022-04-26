import { Footer, Loader, Nav, RoutesList } from "frontend/components";
import GlobalStyles from "frontend/styled-component/globalStyled";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

function App() {
  const location = useLocation();
  const { loader } = useSelector((state) => state.post);
  return (
    <div className="App">
      <GlobalStyles />
      {location.pathname !== "/mock" && <Nav />}
      <RoutesList />
      {location.pathname === "/landing" && <Footer />}
      <ToastContainer />
      {loader && <Loader />}
    </div>
  );
}

export default App;
