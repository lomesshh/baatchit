import { Footer, Loader, Nav, RoutesList } from "frontend/components";
import GlobalStyles from "frontend/styled-component/globalStyled";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllPost } from "frontend/services/PostService";
import { fetchAllUsers } from "frontend/services/UserService";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const { loader, filterType } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPost(filterType));
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <RoutesList />
      {location.pathname === "/" && <Footer />}
      <ToastContainer />
      {loader && <Loader />}
    </div>
  );
}

export default App;
