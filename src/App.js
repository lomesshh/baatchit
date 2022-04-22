import { Footer, Nav, RoutesList } from "frontend/components";
import GlobalStyles from "frontend/styled-component/globalStyled";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <RoutesList />
      {location.pathname === "landing" && <Footer />}
    </div>
  );
}

export default App;
