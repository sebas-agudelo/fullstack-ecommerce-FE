import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import { AppRoutes } from "./routes/AppRoutes";
import { useLocation } from 'react-router-dom';

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
